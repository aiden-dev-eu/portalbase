<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Setup\Patch\Data;

use Aiden\PortalBase\Model\CustomerRepositoryInterface;
use Aiden\PortalBase\Setup\Helper\AttributeSetup;
use Magento\Customer\Model\Customer;
use Magento\Eav\Model\Entity\Attribute\ScopedAttributeInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\Patch\PatchRevertableInterface;

/**
 * Adds custom attributes on product for PortalBase
 *
 * @copyright www.aiden.eu
 * @version 2023.01.12.0
 * @author nils.nijland@aiden.eu | rowan.koops@aiden.eu
 */
class CustomerAuthorizationDataPatch implements DataPatchInterface, PatchRevertableInterface
{
    private AttributeSetup $attributeSetup;

    public const GROUP = 'PortalBase';

    /**
     * @param AttributeSetup $attributeSetup
     */
    public function __construct(
        AttributeSetup $attributeSetup
    ) {
        $this->attributeSetup = $attributeSetup;
    }

    /**
     * Get dependencies.
     *
     * @return string[]
     */
    public static function getDependencies()
    {
        return [];
    }

    /**
     * Get aliases.
     *
     * @return string[]
     */
    public function getAliases()
    {
        return [];
    }

    /**
     * Create custom attributes.
     *
     * @return void
     */
    public function apply()
    {
        $this->attributeSetup->create(Customer::ENTITY, $this->getAttributes(), array('adminhtml_customer'));
    }

    /**
     * Delete custom attributes.
     *
     * @return void
     */
    public function revert()
    {
        $this->attributeSetup->delete(Customer::ENTITY, $this->getAttributes());
    }

    /**
     * Returns custom attributes required by this module.
     *
     * @return array[]
     */
    private function getAttributes()
    {
        return [
            CustomerRepositoryInterface::ATTRIBUTE_AUTH_ID => [
                AttributeSetup::TYPE => AttributeSetup::TYPE_VARCHAR,
                AttributeSetup::LABEL => 'Authorization ID',
                AttributeSetup::GLOBAL => ScopedAttributeInterface::SCOPE_WEBSITE,
                AttributeSetup::VISIBLE => true,
                AttributeSetup::REQUIRED => false,
                AttributeSetup::USER_DEFINED => false,
                AttributeSetup::VISIBLE_ON_FRONT => false,
                AttributeSetup::GROUP => self::GROUP,
                AttributeSetup::SYSTEM => 0
            ],
        ];
    }
}
