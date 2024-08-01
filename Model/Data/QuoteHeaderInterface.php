<?php

declare (strict_types = 1);

namespace Aiden\PortalBase\Model\Data;

use Magento\Customer\Api\Data\AddressInterface;

/**
 * Interface representation of a quote header and it's fields
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.07.07.1
 */
interface QuoteHeaderInterface
{
    public const MAGENTO_OPTIONS = 'magento_options';
    public const SHIPPING_ADDRESS = 'shipping_address';

    /**
     * Set magento options
     *
     * @param \Aiden\PortalBase\Model\Data\MagentoOptionsInterface $magentoOptions
     * @return $this
     */
    public function setMagentoOptions(MagentoOptionsInterface $magentoOptions);

    /**
     * Get magento options
     *
     * @return \Aiden\PortalBase\Model\Data\MagentoOptionsInterface
     */
    public function getMagentoOptions();

    /**
     * Returns if Magento Options are defined.
     *
     * @return bool
     */
    public function hasMagentoOptions();

    /**
     * Set shipping address (optional)
     *
     * @param \Magento\Customer\Api\Data\AddressInterface $shippingAddress
     * @return $this
     */
    public function setShippingAddress(AddressInterface $shippingAddress);

    /**
     * Get shipping address

     * @return \Magento\Customer\Api\Data\AddressInterface
     */
    public function getShippingAddress();

    /**
     * Returns if Shiping Address is defined.
     *
     * @return bool
     */
    public function hasShippingAddress();
}
