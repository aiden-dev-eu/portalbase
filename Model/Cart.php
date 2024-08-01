<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Constants\ConfigConstants;
use Aiden\PortalBase\Model\Data\MagentoOptionsInterface;
use Aiden\PortalBase\Model\Data\QuoteHeaderInterface;
use Aiden\PortalBase\Api\Data\QuoteItemInterface;
use Aiden\PortalBase\Model\Data\MagentoOptionsInterfaceFactory;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Customer\Api\Data\AddressInterface;
use Magento\Framework\Serialize\SerializerInterface;
use Magento\Quote\Api\CartManagementInterface;
use Magento\Quote\Api\CartRepositoryInterface;
use Magento\Framework\DataObject;
use Magento\Checkout\Model\Session as CheckoutSession;
use Magento\Quote\Api\GuestCartManagementInterface;
use Magento\Quote\Api\GuestCartRepositoryInterface;
use Magento\Quote\Model\Quote;
use Magento\Quote\Model\Quote\Item;
use Magento\Tax\Api\TaxCalculationInterface;
use Serac\ERPConnector\Helper\Data;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Catalog\Model\Product;

/**
 * Model containing portal specific functions concerning the cart
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.03.11.0
 */
class Cart implements CartInterface
{
    private const QUANTITY = 'qty';
    private const ATTRIBUTES = 'super_attribute';

    /**
     * @var CartRepositoryInterface
     */
    private CartRepositoryInterface $cartRepository;
    /**
     * @var ProductRepositoryInterface
     */
    private ProductRepositoryInterface $productHelper;
    /**
     * @var CheckoutSession
     */
    private CheckoutSession $checkoutSession;
    /**
     * @var Data
     */
    private Data $erpConnectorHelper;
    /**
     * @var StoreManagerInterface
     */
    private StoreManagerInterface $storeManager;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * @var SerializerInterface
     */
    private SerializerInterface $serializer;

    /**
     * @var MagentoOptionsInterfaceFactory
     */
    private MagentoOptionsInterfaceFactory $magentoOptionsFactory;

    /**
     * @var CustomerRepositoryInterface
     */
    private CustomerRepositoryInterface $customer;

    /**
     * @var TaxCalculationInterface
     */
    private TaxCalculationInterface $tax;

    /**
     * @var CartManagementInterface
     */
    private CartManagementInterface $cartManagement;
    /**
     * @var GuestCartManagementInterface
     */
    private GuestCartManagementInterface $guestCartManagement;
    /**
     * @var GuestCartRepositoryInterface
     */
    private GuestCartRepositoryInterface $guestCartRepository;

    private ConfigInterface $config;

    /**
     *
     * @param CartRepositoryInterface $cartRepository
     * @param ProductRepositoryInterface $productHelper
     * @param CheckoutSession $checkoutSession
     * @param Data $data
     * @param StoreManagerInterface $storeManager
     * @param LoggingInterface $logging
     * @param SerializerInterface $serializer
     * @param MagentoOptionsInterfaceFactory $magentoOptionsFactory
     * @param CustomerRepositoryInterface $customer
     * @param TaxCalculationInterface $tax
     * @param CartManagementInterface $cartManagement
     * @param GuestCartManagementInterface $guestCartManagement
     * @param GuestCartRepositoryInterface $guestCartRepository
     * @param ConfigInterface $config
     */
    public function __construct(
        CartRepositoryInterface    $cartRepository,
        ProductRepositoryInterface $productHelper,
        CheckoutSession            $checkoutSession,
        Data                       $data,
        StoreManagerInterface      $storeManager,
        LoggingInterface           $logging,
        SerializerInterface        $serializer,
        MagentoOptionsInterfaceFactory $magentoOptionsFactory,
        CustomerRepositoryInterface $customer,
        TaxCalculationInterface $tax,
        CartManagementInterface $cartManagement,
        GuestCartManagementInterface $guestCartManagement,
        GuestCartRepositoryInterface $guestCartRepository,
        ConfigInterface $config
    ) {
        $this->cartRepository = $cartRepository;
        $this->productHelper = $productHelper;
        $this->checkoutSession = $checkoutSession;
        $this->erpConnectorHelper = $data;
        $this->storeManager = $storeManager;
        $this->logging = $logging;
        $this->serializer = $serializer;
        $this->magentoOptionsFactory = $magentoOptionsFactory;
        $this->customer = $customer;
        $this->tax = $tax;
        $this->cartManagement = $cartManagement;
        $this->guestCartManagement = $guestCartManagement;
        $this->guestCartRepository = $guestCartRepository;
        $this->config = $config;
    }

    /**
     * @inheritDoc
     */
    public function addProductToCart(QuoteItemInterface $quoteItem)
    {
        $quote = $this->retrieveCustomerQuote();
        $product = $this->productHelper->getProductById(
            (int) $quoteItem->getProductId(),
            false,
            (int) $this->storeManager->getStore()->getId()
        );
        $buyRequest = $this->constructBuyRequest($quoteItem);
        $quote->addProduct($product, $buyRequest);
        $this->cartRepository->save($quote);
        if ($quoteItem->getCustomPrice()) {
            $this->updateQuoteItemWithCustomPrice($product, $quoteItem->getCustomPrice());
        }
    }

    /**
     * @inheritDoc
     */
    public function addProductsToCart(array $quoteItems, QuoteHeaderInterface $quoteHeader)
    {
        //Check if customer is allowed to place order of quote
        $magentoOptions = $this->orderOrQuote($quoteHeader->getMagentoOptions());
        // Keep track of failed items and the corresponding exceptions
        /** @var QuoteItemInterface[] $failedItems */
        $failedItems = [];
        $currentQuote = $this->retrieveCustomerQuote();
        foreach ($quoteItems as $quoteItem) {
            try {
                $currentQuote = $this->addProductToQuote($quoteItem, $currentQuote);
            } catch (\Exception $e) {
                $quoteItem->setErrorDescription($e->getMessage());
                $failedItems[] = $quoteItem;
            }
        }
        //Set Header options
        if ($quoteHeader->hasMagentoOptions()) {
            if ($magentoOptions->hasComment()) {
                /** @phpstan-ignore-next-line Magic getter-setter*/
                $currentQuote->setSeracOrdercomment($magentoOptions->getComment());
            }
            $currentQuote =  $this->updateQuoteMagentoOptions($currentQuote, $magentoOptions);
        }
        if ($quoteHeader->hasShippingAddress()) {
            $currentQuote = $this->setShippingAddress($currentQuote, $quoteHeader->getShippingAddress());
        }
        $currentQuote->collectTotals();
        $this->cartRepository->save($currentQuote);
        return $failedItems;
    }

    /**
     * Checks if customer is allowed to place order or quote and sets appropriate field in MagentoOptions.
     *
     * @param MagentoOptionsInterface $magentoOptions
     * @return MagentoOptionsInterface
     * @throws NoSuchEntityException
     */
    private function orderOrQuote(MagentoOptionsInterface $magentoOptions): MagentoOptionsInterface
    {
        $allowedProfiles = $this->config->getConfigValueAsArray(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_AUTHORIZATION,
            'order'
        );
        if ($this->customer->isAuthorized($allowedProfiles)) {
            return $magentoOptions->setDocumentTypeOrder();
        }
        return $magentoOptions->setDocumentTypeQuote();
    }

    /**
     * @inheritDoc
     */
    public function retrieveCustomerQuote()
    {
        if ($this->customer->isLoggedIn()) {
            return $this->retrieveQuote();
        }
        return $this->retrieveGuestQuote();
    }

    /**
     * Retrieves Quote for logged in customer, if none exists creates one
     *
     * @return \Magento\Quote\Api\Data\CartInterface
     * @throws NoSuchEntityException
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     */
    private function retrieveQuote()
    {
        try {
            $quote =  $this->cartManagement->getCartForCustomer($this->customer->getId());
        } catch (NoSuchEntityException $e) {
            $this->cartManagement->createEmptyCartForCustomer($this->customer->getId());
            $quote = $this->cartManagement->getCartForCustomer($this->customer->getId());
            $this->checkoutSession->replaceQuote($quote);
        }
        return $quote;
    }

    /**
     * Retrieves guest Quote, if none exist creates one
     *
     * @return \Magento\Quote\Api\Data\CartInterface|Quote
     * @throws LocalizedException
     * @throws NoSuchEntityException
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     */
    private function retrieveGuestQuote()
    {
        try {
            $quote = $this->checkoutSession->getQuote();
        } catch (NoSuchEntityException $e) {
            $cartId = $this->guestCartManagement->createEmptyCart();
            $quote = $this->guestCartRepository->get($cartId);
        }
        return $quote;
    }

    /**
     * Add single product to quote and update with custom price if necessary.
     *
     * @param QuoteItemInterface $quoteItem
     * @param Quote $currentQuote
     * @return Quote
     * @throws LocalizedException
     * @throws NoSuchEntityException
     */
    private function addProductToQuote(QuoteItemInterface $quoteItem, Quote $currentQuote)
    {
        if ($quoteItem->getQuantity() < 1) {
            throw new LocalizedException(__('ad_pb_zero_qty', $quoteItem->getProductName()));
            //Quantity for item "%1" is zero.
        }
        $product = $this->getProduct($quoteItem);
        $buyRequest = $this->constructBuyRequest($quoteItem);
        $currentQuoteItem = $currentQuote->addProduct($product, $buyRequest);
        // If the product has a custom price, update the quoteItem with the custom price.
        if ($quoteItem->getCustomPrice()) {
            $this->setCustomPriceOnQuoteItem(
                $currentQuoteItem,
                $quoteItem->getCustomPrice(),
                $product
            );
        }
        return $currentQuote;
    }

    /**
     * Retrieve product data of {@see QuoteItemInterface} by id or sku.
     *
     * @param QuoteItemInterface $quoteItem
     * @return ProductInterface
     * @throws NoSuchEntityException
     */
    private function getProduct(QuoteItemInterface $quoteItem)
    {
        $storeId = (int) $this->storeManager->getStore()->getId();
        $productId = $quoteItem->getProductId();
        if ($productId == null) {
            $sku = $quoteItem->getProductSku();
            return $this->productHelper->getProductBySku($sku, false, $storeId);
        }
        return $this->productHelper->getProductById($productId, false, $storeId);
    }

    /**
     * Updates a quote item from the cart with a custom price.
     *
     * @param \Magento\Quote\Model\Quote\Item $quoteItem
     * @param float $customPrice
     * @param ProductInterface $product
     * @return \Magento\Quote\Model\Quote\Item
     */
    private function setCustomPriceOnQuoteItem(
        Item $quoteItem,
        float $customPrice,
        ProductInterface $product
    ) {
        $taxPerc = $this->tax->getCalculatedRate(
            $product->getTaxClassId(),
            $this->customer->getId(),
            $this->storeManager->getStore()->getId()
        );
        $priceEx = $customPrice / (1 + ($taxPerc / 100));
        $quoteItem->setCustomPrice($priceEx);
        $quoteItem->setOriginalCustomPrice($priceEx);
        /** @phpstan-ignore-next-line */
        $quoteItem->setIsSuperMode(true);
        return $quoteItem;
    }

    /**
     * Updates Quote item with custom price
     *
     * @deprecated
     * @param ProductInterface|Product $product
     * @param float $price
     * @return void
     * @throws LocalizedException
     * @throws NoSuchEntityException
     */
    private function updateQuoteItemWithCustomPrice($product, float $price)
    {
        $quote = $this->retrieveCustomerQuote();
        $quoteItem = $quote->getItemByProduct($product);
        $customerId =  $this->customer->isLoggedIn() ? $this->customer->getId() : null;
        $taxPerc = $this->tax->getCalculatedRate(
            $product->getTaxClassId(),
            $customerId,
            $this->storeManager->getStore()->getId()
        );
        $priceEx = $price / (1 + ($taxPerc / 100));
        $quoteItem->setCustomPrice($priceEx);
        $quoteItem->setOriginalCustomPrice($priceEx);
        $quoteItem->setIsSuperMode(true);
        $this->cartRepository->save($quote);
    }

    /**
     * Constructs buy request to add product to cart.
     *
     * @param QuoteItemInterface $quoteItem
     * @return DataObject
     */
    private function constructBuyRequest(QuoteItemInterface $quoteItem)
    {
        $parameters = [];
        if (!empty($quoteItem->getConfiguration())) {
            $parameters[self::ATTRIBUTES] = $quoteItem->getConfiguration();
        }
        if ($quoteItem->getQuantity()) {
            $parameters[self::QUANTITY] = $quoteItem->getQuantity();
        }
        $parameters[self::IS_PORTAL] = true;
        return new DataObject($parameters);
    }

    /**
     * @inheritDoc
     */
    public function setQuoteMagentoOptions(array $magentoOptions)
    {
        $quote = $this->checkoutSession->getQuote();
        $this->erpConnectorHelper->addQuoteMagentoOptionsMultiple($quote, $magentoOptions);
        $this->cartRepository->save($quote);
    }

    /**
     * Updates Magento options on current quote
     *
     * @param Quote $currentQuote
     * @param MagentoOptionsInterface $magentoOptions
     * @return Quote
     */
    private function updateQuoteMagentoOptions(Quote $currentQuote, MagentoOptionsInterface $magentoOptions)
    {
        /** @phpstan-ignore-next-line Magic getter-setter*/
        $currentMagOpt = $currentQuote->getMagentooptions();
        if ($currentMagOpt && strlen($currentMagOpt) > 0) {
            $currentMagOpt = $this->serializer->unserialize($currentMagOpt);
        } else {
            $currentMagOpt = [];
        }
        foreach ($magentoOptions->getData() as $key => $value) {
            $currentMagOpt[$key] = $value;
        }
        /** @phpstan-ignore-next-line Magic getter-setter*/
        $currentQuote->setMagentooptions($this->serializer->serialize($currentMagOpt));
        return $currentQuote;
    }

    /**
     * @inheritDoc
     */
    public function getMagentoOptions(Quote $currentQuote)
    {
        /** @var MagentoOptionsInterface $magentoOptions */
        $magentoOptions = $this->magentoOptionsFactory->create();
        try {
            /** @phpstan-ignore-next-line Magic getter-setter*/
            $currentData = $this->serializer->unserialize($currentQuote->getMagentooptions());
            $magentoOptions->setData($currentData);
            return $magentoOptions;
        } catch (\Exception $e) {
            $this->logging->warn($e->getMessage());
        }
        return $magentoOptions;
    }

    /**
     * @inheritDoc
     */
    public function clearCart()
    {
        $quote = $this->retrieveCustomerQuote();
        $quote->removeAllItems();
        $quote->setMagentooptions('');
        $this->cartRepository->save($quote);
    }

    /**
     * Sets shipping address on quote.
     *
     * @param Quote $currentQuote
     * @param AddressInterface $shippingAddress
     * @return Quote
     */
    private function setShippingAddress(Quote $currentQuote, AddressInterface $shippingAddress)
    {
        $currentQuote->getShippingAddress()->importCustomerAddressData($shippingAddress);
        return $currentQuote;
    }
}
