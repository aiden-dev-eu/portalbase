<?php
declare(strict_types=1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Model\Data\BaseProductDataInterface;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Catalog\Api\Data\ProductSearchResultsInterface;
use Magento\Catalog\Model\Product;
use Magento\Framework\Api\SearchCriteriaInterface;
use Magento\Framework\Exception\NoSuchEntityException;

interface ProductRepositoryInterface
{
    /**
     * Retrieves image url and product name from Magento.
     *
     * @param string $sku
     * @param bool $allowRandom Allow random dummy data. Default value is false
     * @param int|null $storeId Optional
     * @return BaseProductDataInterface
     * @throws NoSuchEntityException
     */
    public function getData(string $sku, bool $allowRandom = false, int $storeId = null): BaseProductDataInterface;

    /**
     * Retrieves product from Magento.
     *
     * @param string $sku
     * @param bool $allowRandom Allow random dummy data. Default value is false
     * @param int|null $storeId optional
     * @return \Magento\Catalog\Api\Data\ProductInterface
     * @throws NoSuchEntityException Product with sku doesn't exist
     */
    public function getProductBySku(string $sku, bool $allowRandom = false, int $storeId = null): ProductInterface;

    /**
     * Retrieves product image url.
     *
     * @param ProductInterface|Product $product
     * @return string Url of the product image
     * @throws NoSuchEntityException
     */
    public function getImage($product): string;

    /**
     *  Retrieves ID of parent product.
     *
     * @param int $childId
     * @return string
     */
    public function getParentId(int $childId): string;

    /**
     * Retrieves all configurable options of a Product ordered by frontend sort order.
     *
     * @param Product|ProductInterface $parent
     * @return array
     */
    public function getConfigurableAttributesByPosition($parent): array;

    /**
     * Retrieve product by id.
     *
     * @param int $productId
     * @param bool $allowRandom default > false
     * @param int|null $storeId Optional
     * @return \Magento\Catalog\Api\Data\ProductInterface
     * @throws NoSuchEntityException
     */
    public function getProductById(int $productId, bool $allowRandom = false, int $storeId = null): ProductInterface;

    /**
     * Checks if product exists.
     *
     * @param string $sku
     * @return bool
     */
    public function productExists(string $sku): bool;

    /**
     * Get product list from catalog repository
     *
     * @param SearchCriteriaInterface $searchCriteria
     * @return \Magento\Catalog\Api\Data\ProductSearchResultsInterface
     */
    public function getList(SearchCriteriaInterface $searchCriteria): ProductSearchResultsInterface;
}
