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
class UpdatePortalOrderByDirection implements DataPatchInterface, PatchRevertableInterface
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
            $connection->getTableName('core_config_data'),
            ['value' => 'ASC'],
            ['path LIKE ?' => 'portal%/orderby_direction', 'value = ?' => '0']
        );
        $connection->update(
            $connection->getTableName('core_config_data'),
            ['value' => 'DESC'],
            ['path LIKE ?' => 'portal%/orderby_direction', 'value = ?' => '1']
        );
        $this->moduleDataSetup->endSetup();
    }

    /**
     * @inheritDoc
     */
    public function revert()
    {
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
