<?php

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\CurrencyInterface;
use Magento\Framework\DataObject;

class Currency extends DataObject implements CurrencyInterface
{

    /**
     * @inheritDoc
     */
    public function setSingle(bool $single)
    {
        return $this->setData(self::SINGLE, $single);
    }

    /**
     * @inheritDoc
     */
    public function isSingle()
    {
        return $this->_getData(self::SINGLE);
    }

    /**
     * @inheritDoc
     */
    public function setSymbol(string $symbol)
    {
        return $this->setData(self::SYMBOL, $symbol);
    }

    /**
     * @inheritDoc
     */
    public function getSymbol()
    {
        return $this->_getData(self::SYMBOL);
    }
}
