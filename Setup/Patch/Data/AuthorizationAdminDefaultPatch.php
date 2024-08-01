<?php

namespace Aiden\PortalBase\Setup\Patch\Data;

use Aiden\PortalBase\Model\CustomerRepositoryInterface;
use Aiden\PortalBase\Setup\Helper\AttributeSetup;
use Magento\Customer\Model\Customer;
use Magento\Framework\Setup\Patch\DataPatchInterface;

/**
 * DataPatch to set a default value on 'edit_authid' attribute
 *
 * @copyright www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 20224.06.24.0
 */
class AuthorizationAdminDefaultPatch implements DataPatchInterface
{
    /**
     * @var AttributeSetup
     */
    private AttributeSetup $setup;
    /**
     * @param AttributeSetup $setup
     */
    public function __construct(
        AttributeSetup $setup
    ) {
        $this->setup = $setup;
    }
    /**
     * @inheritDoc
     */
    public static function getDependencies()
    {
        return [];
    }

    /**
     * @inheritDoc
     */
    public function getAliases()
    {
        return [];
    }

    /**
     * @inheritDoc
     */
    public function apply()
    {
        $this->setup->edit(Customer::ENTITY, $this->getAttributeUpdates());
    }

    /**
     * Returns custom attributes required by this module.
     *
     * @return array[]
     */
    private function getAttributeUpdates()
    {
        return [
            CustomerRepositoryInterface::ATTRIBUTE_EDIT_AUTH_ID => [
                'default_value' => 0
            ],
        ];
    }
}
