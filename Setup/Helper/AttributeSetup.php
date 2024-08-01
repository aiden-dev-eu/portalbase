<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Setup\Helper;

use Aiden\PortalBase\Model\LoggingInterface;
use Magento\Customer\Model\Customer;
use Magento\Customer\Model\ResourceModel\Attribute;
use Magento\Eav\Model\Config;
use Magento\Eav\Model\Entity\Attribute\SetFactory;
use Magento\Eav\Setup\EavSetupFactory;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class AttributeSetup
{
    /**
     * @var ModuleDataSetupInterface
     */
    private ModuleDataSetupInterface $moduleDataSetup;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logger;
    /**
     * @var Config
     */
    private Config $eavConfig;
    /**
     * @var SetFactory
     */
    private SetFactory $setFactory;
    /**
     * @var Attribute
     */
    private Attribute $attribute;
    /**
     * @var EavSetupFactory
     */
    private EavSetupFactory $eavSetupFactory;

    private const SETUP = 'setup';

    public const TYPE = 'type';
    public const BACKEND = 'backend';
    public const FRONTEND = 'frontend';
    public const LABEL = 'label';
    public const INPUT = 'input';
    public const ATTR_CLASS = 'class';
    public const SOURCE = 'source';
    public const GLOBAL = 'global';
    public const VISIBLE = 'visible';
    public const REQUIRED = 'required';
    public const USER_DEFINED = 'user_defined';
    public const DEFAULT = 'default';
    public const SEARCHABLE = 'searchable';
    public const FILTERABLE = 'filterable';
    public const COMPARABLE = 'comparable';
    public const VISIBLE_ON_FRONT = 'visible_on_front';
    public const USED_IN_PRODUCT_LISTING = 'used_in_product_listing';
    public const UNIQUE = 'unique';
    public const GROUP = 'group';
    public const WYSISWYG_ENABLED = 'wysiwyg_enabled';
    public const SYSTEM = 'system';
    public const FRONTEND_CLASS = 'frontend_class';

    public const TYPE_INT = 'int';
    public const TYPE_DECIMAL = 'decimal';
    public const TYPE_TEXT = 'text';
    public const TYPE_TEXT_AREA = 'textarea';
    public const TYPE_VARCHAR = 'varchar';

    public const INPUT_BOOLEAN = 'boolean';
    public const INPUT_SELECT = 'select';
    public const INPUT_PRICE = 'price';
    public const INPUT_MULTI_SELECT = 'multiselect';

    /**
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param EavSetupFactory $eavSetupFactory
     * @param LoggingInterface $loggingHelper
     * @param Config $config
     * @param SetFactory $setFactory
     * @param Attribute $attribute
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        EavSetupFactory          $eavSetupFactory,
        LoggingInterface         $loggingHelper,
        Config                   $config,
        SetFactory               $setFactory,
        Attribute                $attribute
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->eavSetupFactory = $eavSetupFactory;
        $this->logger = $loggingHelper;
        $this->eavConfig = $config;
        $this->setFactory = $setFactory;
        $this->attribute = $attribute;
    }

    /**
     * Inserts creates custom attribute.
     *
     * @param mixed $type
     * @param array $codeOptionsMap
     * @param array $usedInForms
     * @return void
     */
    public function create($type, array $codeOptionsMap, array $usedInForms = [])
    {
        $this->moduleDataSetup->getConnection()->startSetup();
        $eavSetup = $this->eavSetupFactory->create([self::SETUP => $this->moduleDataSetup]);

        $attributeSetId = $this->getDefaultAttributeSetId($type);
        $attributeGroupId = $this->getDefaultGroupId($attributeSetId);

        foreach ($codeOptionsMap as $code => $options) {
            $eavSetup->addAttribute($type, $code, $options);

            if ($type === Customer::ENTITY) {
                $customAttribute = $this->eavConfig->getAttribute(Customer::ENTITY, $code);
                $customAttribute->addData([
                    'attribute_set_id' => $attributeSetId,
                    'attribute_group_id' => $attributeGroupId
                ]);
                if (count($usedInForms) > 0) {
                    $customAttribute->setData('used_in_forms', $usedInForms);
                }
                $this->attribute->save($customAttribute);
            }
        }
        $this->moduleDataSetup->getConnection()->endSetup();
    }

    /**
     * Deletes custom attribute.
     *
     * @param mixed $type
     * @param array $codeOptionsMap
     * @return void
     */
    public function delete($type, array $codeOptionsMap)
    {
        $this->moduleDataSetup->getConnection()->startSetup();
        $eavSetup = $this->eavSetupFactory->create(['setup' => $this->moduleDataSetup]);
        foreach ($codeOptionsMap as $code => $options) {
            $eavSetup->removeAttribute($type, $code);
        }
        $this->moduleDataSetup->getConnection()->endSetup();
    }

    /**
     * Updates one ore more attributes.
     *
     * @param $type
     * @param array $codeOptionsMap
     * @return void
     */
    public function edit($type, array $codeOptionsMap)
    {
        $this->moduleDataSetup->getConnection()->startSetup();
        $eavSetup = $this->eavSetupFactory->create(['setup' => $this->moduleDataSetup]);
        foreach ($codeOptionsMap as $code => $options) {
            foreach ($options as $key => $value) {
                $eavSetup->updateAttribute($type, $code, $key, $value);
            }
        }
        $this->moduleDataSetup->getConnection()->endSetup();
    }

    /**
     * Gets default attribute set id.
     *
     * @param mixed $type
     * @return string|null
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    private function getDefaultAttributeSetId($type)
    {
        $customerEntity = $this->eavConfig->getEntityType($type);
        return $customerEntity->getDefaultAttributeSetId();
    }

    /**
     * Gets default group id.
     *
     * @param int $attributeSetId
     * @return int|null
     */
    private function getDefaultGroupId($attributeSetId)
    {
        $attributeSet = $this->setFactory->create();
        return $attributeSet->getDefaultGroupId($attributeSetId);
    }

}
