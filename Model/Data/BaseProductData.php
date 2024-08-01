<?php

declare(strict_types=1);

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

/**
 * Model contain base product data needed to complement SAP item data.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2024.04.29.0
 */
class BaseProductData extends DataObject implements BaseProductDataInterface
{
    /**
     * @inheritDoc
     */
    public function setImageUrl(string $imageUrl): BaseProductDataInterface
    {
       return $this->setData(self::IMAGE_URL, $imageUrl);
    }

    /**
     * @inheritDoc
     */
    public function getImageUrl(): string
    {
        return $this->_getData(self::IMAGE_URL) ?? '';
    }

    /**
     * @inheritDoc
     */
    public function setPrice(float $price): BaseProductDataInterface
    {
        return $this->setData(self::PRICE, $price);
    }

    /**
     * @inheritDoc
     */
    public function getPrice(): float
    {
        return $this->_getData(self::PRICE) ?? 0.0;
    }

    /**
     * @inheritDoc
     */
    public function setName(string $name): BaseProductDataInterface
    {
        return $this->setData(self::NAME, $name);
    }

    /**
     * @inheritDoc
     */
    public function getName(): string
    {
        return $this->_getData(self::NAME) ?? '';
    }

    /**
     * @inheritDoc
     */
    public function setUrl(string $url): BaseProductDataInterface
    {
        return $this->setData(self::URL, $url);
    }

    /**
     * @inheritDoc
     */
    public function getUrl(): string
    {
        return $this->_getData(self::URL) ?? '';
    }
}
