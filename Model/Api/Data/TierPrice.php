<?php

namespace Aiden\PortalBase\Model\Api\Data;

use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\TierPriceInterface;

class TierPrice extends DataObject implements TierPriceInterface
{
    /**
     * @inheritDoc
     */
    public function setQty($qty): TierPriceInterface
    {
        return $this->setData(self::TIER_QTY, $qty);
    }

    /**
     * @inheritDoc
     */
    public function getQty(): int
    {
        return $this->_getData(self::TIER_QTY);
    }

    /**
     * @inheritDoc
     */
    public function setPrice($price): TierPriceInterface
    {
        return $this->setData(self::TIER_PRICE, $price);
    }

    /**
     * @inheritDoc
     */
    public function getPrice(): float
    {
        return $this->_getData(self::TIER_PRICE);
    }
}
