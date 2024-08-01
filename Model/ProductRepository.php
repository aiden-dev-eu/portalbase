<?php

declare(strict_types=1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Model\Data\BaseProductDataInterface;
use Aiden\PortalBase\Model\Data\BaseProductDataInterfaceFactory;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Catalog\Api\Data\ProductInterfaceFactory;
use Magento\Catalog\Api\Data\ProductSearchResultsInterface;
use Magento\Catalog\Api\ProductRepositoryInterface as Catalog;
use Magento\Catalog\Helper\Image;
use Magento\Catalog\Model\ResourceModel\Product\CollectionFactory;
use Magento\ConfigurableProduct\Model\Product\Type\Configurable;
use Magento\Framework\Api\SearchCriteriaInterface;
use Magento\Framework\App\Area;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\App\Emulation;

/**
 * Wrapper class with convenience methods for products from Magento
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */

class ProductRepository implements ProductRepositoryInterface
{
    /**
     * @var Catalog
     */
    private Catalog $product;
    /**
     * @var Image
     */
    private Image $image;
    /**
     * @var ConfigInterface
     */
    private ConfigInterface $settings;
    /**
     * @var LoggingInterface|Logging
     */
    private LoggingInterface $logging;
    /**
     * @var Emulation
     */
    private Emulation $emulation;
    /**
     * @var Configurable
     */
    private Configurable $configurable;
    /**
     * @var StoreInterface
     */
    private StoreInterface $store;
    /**
     * @var ProductInterfaceFactory
     */
    private ProductInterfaceFactory $productFactory;
    /**
     * @var CollectionFactory
     */
    private CollectionFactory $collection;

    private BaseProductDataInterfaceFactory $baseProductFactory;

    public const IMAGE_SIZE_LARGE = 'product_page_image_large';
    public const IMAGE_SIZE_SMALL = 'product_base_image';

    /**
     * Product constructor.
     *
     * @param Catalog $product
     * @param Image $image
     * @param ConfigInterface $settings
     * @param Logging $logging
     * @param Emulation $emulation
     * @param Configurable $configurable
     * @param StoreInterface $store
     * @param CollectionFactory $collection
     * @param ProductInterfaceFactory $productFactory
     */
    public function __construct(
        Catalog          $product,
        Image            $image,
        ConfigInterface  $settings,
        LoggingInterface $logging,
        Emulation        $emulation,
        Configurable     $configurable,
        StoreInterface   $store,
        CollectionFactory $collection,
        ProductInterfaceFactory $productFactory,
        BaseProductDataInterfaceFactory $baseProductFactory
    ) {
        $this->product = $product;
        $this->image = $image;
        $this->settings = $settings;
        $this->logging = $logging;
        $this->emulation = $emulation;
        $this->configurable = $configurable;
        $this->store = $store;
        $this->collection = $collection;
        $this->productFactory = $productFactory;
        $this->baseProductFactory = $baseProductFactory;
    }

    /**
     * @inheritDoc
     */
    public function getData(string $sku, bool $allowRandom = false, int $storeId = null): BaseProductDataInterface
    {
        /** @var BaseProductDataInterface $baseProduct */
        $baseProduct = $this->baseProductFactory->create();
        $baseProduct->setImageUrl($this->settings->getImagePlaceHolder());
        try {
            $product = $this->getProductBySku($sku, $allowRandom, $storeId);
        } catch (NoSuchEntityException $e) {
           return $baseProduct;
        }
        $baseProduct->setImageUrl($this->getImage($product));
        $baseProduct->setName($product->getName());
        $baseProduct->setPrice((float) $product->getFinalPrice());

        $parentId = $this->getParentId((int) $product->getId());
        if (strlen($parentId) > 0) {
            $parent = $this->getProductById((int) $parentId);
            return $baseProduct->setUrl($parent->getProductUrl());
        }
        return $baseProduct->setUrl($product->getProductUrl());
    }

    /**
     * @inheritDoc
     */
    public function getProductBySku(string $sku, bool $allowRandom = false, int $storeId = null): ProductInterface
    {
        if (!$storeId) {
            $storeId = $this->store->getStoreId();
        }

        if ($this->isSampleDataEnabled() && $allowRandom) {
            return $this->getRandomProduct((int) $storeId);
        }

        try {
            return $this->product->get($sku, false, $storeId);
        } catch (NoSuchEntityException $e) {
            $this->logging->error('The product with sku ' . $sku . 'doesn\'t exist in store with id: ' . $storeId);
            throw new NoSuchEntityException(__('The product with itemcode "%1" doesn\'t exist.', $sku));
        }
    }

    /**
     * @inheritDoc
     */
    public function getImage($product): string
    {
        $storeId = $this->store->getStoreId();
        $this->emulation->startEnvironmentEmulation($storeId, Area::AREA_FRONTEND, true);
        $url = $this->image->init($product, self::IMAGE_SIZE_SMALL)->getUrl();
        $this->emulation->stopEnvironmentEmulation();
        return $url;
    }

    /**
     * @inheritDoc
     */
    public function getParentId(int $childId): string
    {
        $product = $this->configurable->getParentIdsByChild($childId);
        if (isset($product[0])) {
            return $product[0];
        }
        return '';
    }

    /**
     * @inheritDoc
     */
    public function getConfigurableAttributesByPosition($parent): array
    {
        $attributeOptions = $this->configurable->getConfigurableAttributesAsArray($parent);
        $orderedAttributes = [];
        foreach ($attributeOptions as $value) {
            $orderedAttributes[] = $value;
        }
        return $orderedAttributes;
    }

    /**
     * @inheritDoc
     */
    public function getProductById(int $productId, bool $allowRandom = false, int $storeId = null): ProductInterface
    {
        if (!$storeId) {
            $storeId = $this->store->getStoreId();
        }

        if ($this->isSampleDataEnabled() && $allowRandom) {
            return $this->getRandomProduct($storeId);
        }

        try {
            return $this->product->getById($productId, false, $storeId);
        } catch (NoSuchEntityException $e) {
            $this->logging->error('The product with id ' . $productId . 'doesn\'t exist in store with id: ' . $storeId);
            throw new NoSuchEntityException(
                __('The product with id "%1" doesn\'t exist.', $productId)
            );
        }
    }

    /**
     * Retrieves one random product from the collection.
     *
     * @param int $storeId
     * @return ProductInterface
     * @throws NoSuchEntityException No products found for this store id
     */
    private function getRandomProduct(int $storeId): ProductInterface
    {
        $randCol = $this->collection->create();
        $randCol->addAttributeToSelect('*')->setStore($storeId)->getSelect()->orderRand()->limit(1);
        if ($randCol->count() < 1) {
            throw new NoSuchEntityException(__("No products found for store with id: " . $storeId));
        }
        $randomProduct = $randCol->getFirstItem()->getData();
        /** Above should be retrieved by product->getList so next step wouldn't be necessary,
         * but searchcriteriabuilder has no random sort.
         */
        /** @phpstan-ignore-next-line */
        return $this->productFactory->create()->setData($randomProduct);
    }

    /**
     * @inheritDoc
     */
    public function productExists(string $sku): bool
    {
        try {
            $this->product->get($sku);
        } catch (\Exception $e) {
            return false;
        }
        return true;
    }

    /**
     * Returns if sample data is enabled.
     *
     * @return bool
     * @throws NoSuchEntityException
     */
    private function isSampleDataEnabled(): bool
    {
        return $this->settings->isConfigValue('portalbase_section/debug/', 'sample_data');
    }

    /**
     * @inheritDoc
     */
    public function getList(SearchCriteriaInterface $searchCriteria): ProductSearchResultsInterface
    {
        return $this->product->getList($searchCriteria);
    }
}
