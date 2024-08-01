<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of a quote item and it's fields
 * This is visible in the API and used to add products to the cart
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.07.07.1
 */
interface QuoteItemInterface
{
    public const PRODUCT_ID = 'product_id';
    public const ENTITY_ID = 'entity_id';
    public const PRODUCT_SKU = 'product_sku';
    public const PRODUCT_NAME = 'product_name';
    public const QUANTITY = 'quantity';
    public const CONFIGURATION = 'configuration';
    public const CUSTOM_PRICE = 'custom_price';
    public const ERROR_DESCRIPTION = 'error_description';

    /**
     * Set product id
     *
     * @param int $productId
     * @return $this
     */
    public function setProductId(int $productId);

    /**
     * Get product id
     *
     * @return int|null
     */
    public function getProductId();

    /**
     * Set entity id (used for orderlists)
     *
     * @param int $entityId
     * @return $this
     */
    public function setEntityId(int $entityId);

    /**
     * Get entity id (used for orderlists)
     *
     * @return int|null
     */
    public function getEntityId();

    /**
     * Set product sku
     *
     * @param string $productSku
     * @return $this
     */
    public function setProductSku(string $productSku);

    /**
     * Get product sku
     *
     * @return string
     */
    public function getProductSku();

    /**
     * Set product name
     *
     * @param string $productName
     * @return $this
     */
    public function setProductName(string $productName);

    /**
     * Get product name
     *
     * @return string
     */
    public function getProductName();

    /**
     * Set quantity
     *
     * @param int $quantity
     * @return $this
     */
    public function setQuantity(int $quantity);

    /**
     * Get quantity
     *
     * @return int
     */
    public function getQuantity();

    /**
     * Set configuration
     *
     * @param int[] $configuration
     * @return mixed
     */
    public function setConfiguration(array $configuration);

    /**
     * Get configuration
     *
     * @return int[]
     */
    public function getConfiguration();

    /**
     * Set custom price
     *
     * @param float $customPrice
     * @return $this
     */
    public function setCustomPrice(float $customPrice);

    /**
     * Get custom price
     *
     * @return float
     */
    public function getCustomPrice();

    /**
     * Set error description
     *
     * @param string $errorDescription
     * @return $this
     */
    public function setErrorDescription(string $errorDescription);

    /**
     * Get error description
     *
     * @return string
     */
    public function getErrorDescription();
}
