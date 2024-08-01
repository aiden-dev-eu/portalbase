<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Model\Data\MagentoOptionsInterface;
use Aiden\PortalBase\Model\Data\QuoteHeaderInterface;
use Aiden\PortalBase\Api\Data\QuoteItemInterface;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Quote\Model\Quote;

/**
 * Interface defining portal specific functions concerning the cart
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.03.11.0
 */
interface CartInterface
{
    public const IS_PORTAL = 'portal';
    /**
     * Adds product to cart
     *
     * @deprecated: use {@see addProductsToCart()} to cart
     * @param \Aiden\PortalBase\Api\Data\QuoteItemInterface $quoteItem
     * @return void
     * @throws LocalizedException
     * @throws NoSuchEntityException
     */
    public function addProductToCart(QuoteItemInterface $quoteItem);

    /**
     * Add multiple products to the cart. Saves current Quote only once, incoporates custom price and Magentooptions.
     *
     * @param \Aiden\PortalBase\Api\Data\QuoteItemInterface[] $quoteItems
     * @param QuoteHeaderInterface $quoteHeader
     * @return \Aiden\PortalBase\Api\Data\QuoteItemInterface[] Items that failed to be added tot the cart
     */
    public function addProductsToCart(array $quoteItems, QuoteHeaderInterface $quoteHeader);

    /**
     * Set Magentooptions on Quote
     *
     * @deprecated: Use {@see addProductsToCart()}
     * @param array $magentoOptions
     * @return void
     * @throws LocalizedException
     */
    public function setQuoteMagentoOptions(array $magentoOptions);

    /**
     * Removes all items from Cart and sets Magentooptions empty.
     *
     * @return void
     * @throws LocalizedException
     */
    public function clearCart();

    /**
     * Save function to retrieve Magento options from current Quote.
     *
     * @param Quote $currentQuote
     * @return MagentoOptionsInterface
     */
    public function getMagentoOptions(Quote $currentQuote);

    /**
     * Retrieves the current quote of the logged in customer, or creates one.
     *
     * @return \Magento\Quote\Api\Data\CartInterface
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     */
    public function retrieveCustomerQuote();
}
