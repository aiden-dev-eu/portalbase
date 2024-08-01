<?php

namespace Aiden\PortalBase\Model\Data;

use Magento\Customer\Api\Data\AddressInterface;
use Magento\Framework\DataObject;

/**
 * Model containing functions for quote header and it's fields
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.07.07.1
 */
class QuoteHeader extends DataObject implements QuoteHeaderInterface
{
    /**
     * @inheritDoc
     */
    public function setMagentoOptions(MagentoOptionsInterface $magentoOptions)
    {
        return $this->setData(self::MAGENTO_OPTIONS, $magentoOptions);
    }

    /**
     * @inheritDoc
     */
    public function getMagentoOptions()
    {
        return $this->_getData(self::MAGENTO_OPTIONS);
    }

    /**
     * @inheritDoc
     */
    public function hasMagentoOptions()
    {
        return ($this->getMagentoOptions() !== null);
    }

    /**
     * @inheritDoc
     */
    public function setShippingAddress(AddressInterface $shippingAddress)
    {
        return $this->setData(self::SHIPPING_ADDRESS, $shippingAddress);
    }

    /**
     * @inheritDoc
     */
    public function getShippingAddress()
    {
        return $this->_getData(self::SHIPPING_ADDRESS);
    }

    /**
     * @inheritDoc
     */
    public function hasShippingAddress()
    {
        return ($this->getShippingAddress() !== null);
    }
}
