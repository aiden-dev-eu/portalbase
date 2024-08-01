<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Setup\Patch\Data;

use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\Patch\PatchRevertableInterface;

/**
 * Class UpdateOrderStatusState
 * @package Aiden\PortalBase\Setup\Patch\Data
 */
class UpdateOrderStatusState implements DataPatchInterface, PatchRevertableInterface
{
    /**
     * @var ModuleDataSetupInterface
     */
    private ModuleDataSetupInterface $moduleDataSetup;

    /**
     * @param ModuleDataSetupInterface $moduleDataSetup
     */
    public function __construct(ModuleDataSetupInterface $moduleDataSetup)
    {
        $this->moduleDataSetup = $moduleDataSetup;
    }

    /**
     * @inheritDoc
     */
    public function apply()
    {
        $setup = $this->moduleDataSetup->startSetup();
        $connection = $setup->getConnection();
        $connection->update(
            $connection->getTableName('sales_order_status_state'),
            ['visible_on_front' => false],
            ['status = ?' => 'pending']
        );
        $this->moduleDataSetup->endSetup();
    }

    /**
     * @inheritDoc
     */
    public function revert()
    {
        $setup = $this->moduleDataSetup->startSetup();
        $connection = $setup->getConnection();
        $connection->update(
            $connection->getTableName('sales_order_status_state'),
            ['visible_on_front' => true],
            ['status = ?' => 'pending']
        );
        $this->moduleDataSetup->endSetup();
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
}
