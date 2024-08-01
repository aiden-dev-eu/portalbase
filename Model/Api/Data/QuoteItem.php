<?php

namespace Aiden\PortalBase\Model\Api\Data;

use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\QuoteItemInterface;

/**
 * Model containing functions for a quote item and it's fields
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.07.07.1
 */
class QuoteItem extends DataObject implements QuoteItemInterface
{

    /**
     * @inheritDoc
     */
    public function setProductId(int $productId)
    {
        return $this->setData(self::PRODUCT_ID, $productId);
    }

    /**
     * @inheritDoc
     */
    public function getProductId()
    {
        return $this->_getData(self::PRODUCT_ID);
    }

    /**
     * @inheritDoc
     */
    public function setQuantity(int $quantity)
    {
        return $this->setData(self::QUANTITY, $quantity);
    }

    /**
     * @inheritDoc
     */
    public function getQuantity()
    {
        return $this->_getData(self::QUANTITY);
    }

    /**
     * @inheritDoc
     */
    public function setConfiguration(array $configuration)
    {
        return $this->setData(self::CONFIGURATION, $configuration);
    }

    /**
     * @inheritDoc
     */
    public function getConfiguration()
    {
        return $this->_getData(self::CONFIGURATION);
    }

    /**
     * @inheritDoc
     */
    public function setCustomPrice(float $customPrice)
    {
        return $this->setData(self::CUSTOM_PRICE, $customPrice);
    }

    /**
     * @inheritDoc
     */
    public function getCustomPrice()
    {
        return $this->_getData(self::CUSTOM_PRICE);
    }

    /**
     * @inheritDoc
     */
    public function setProductSku(string $productSku)
    {
        return $this->setData(self::PRODUCT_SKU, $productSku);
    }

    /**
     * @inheritDoc
     */
    public function getProductSku()
    {
        return $this->_getData(self::PRODUCT_SKU);
    }

    /**
     * @inheritDoc
     */
    public function setProductName(string $productName)
    {
        return $this->setData(self::PRODUCT_NAME, $productName);
    }

    /**
     * @inheritDoc
     */
    public function getProductName()
    {
        return $this->_getData(self::PRODUCT_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setErrorDescription(string $errorDescription)
    {
        return $this->setData(self::ERROR_DESCRIPTION, $errorDescription);
    }

    /**
     * @inheritDoc
     */
    public function getErrorDescription()
    {
        return $this->getData(self::ERROR_DESCRIPTION);
    }

    /**
     * @inheritDoc
     */
    public function setEntityId(int $entityId)
    {
        return $this->setData(self::ENTITY_ID, $entityId);
    }

    /**
     * @inheritDoc
     */
    public function getEntityId()
    {
       return $this->_getData(self::ENTITY_ID);
    }
}
