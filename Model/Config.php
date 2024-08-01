<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\Module\Manager;
use Magento\Framework\Serialize\SerializerInterface;
use Magento\Store\Model\ScopeInterface as ScopeInterface;

/**
 * Retrieves settings from portal admin config and base Magento
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */
class Config implements ConfigInterface
{
    /**
     * @var StoreInterface
     */
    private StoreInterface $storeModelInterface;
    /**
     * @var ScopeConfigInterface
     */
    private ScopeConfigInterface $scopeConfig;
    /**
     * @var SerializerInterface
     */
    private SerializerInterface $serializer;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;
    /**
     * @var Manager
     */
    private Manager $moduleManager;
    /**
     * Settings constructor.
     *
     * @param ScopeConfigInterface $scopeConfig
     * @param StoreInterface $storeModelInterface
     * @param SerializerInterface $serializer
     * @param LoggingInterface $logging
     * @param Manager $moduleManager
     */
    public function __construct(
        ScopeConfigInterface $scopeConfig,
        StoreInterface $storeModelInterface,
        SerializerInterface $serializer,
        LoggingInterface $logging,
        Manager $moduleManager
    ) {
        $this->scopeConfig = $scopeConfig;
        $this->storeModelInterface = $storeModelInterface;
        $this->serializer = $serializer;
        $this->logging = $logging;
        $this->moduleManager = $moduleManager;
    }

    /**
     * @InheritDoc
     */
    public function getConfigValue($path, $value, $optionalReturnValue = '')
    {
        return $this->getConfigValueForStore(
            $path,
            $value,
            (int) $this->storeModelInterface->getStoreId(),
            $optionalReturnValue
        );
    }

    /**
     * @inheritDoc
     */
    public function getConfigValueForStore(string $path, string $value, int $storeId, $optionalReturnValue = '')
    {
        $setting = $this->scopeConfig->getValue(
            $path . $value,
            ScopeInterface::SCOPE_STORE,
            $storeId
        );
        if ($setting === null) {
            $this->logging->error('Setting with path \'' . $path . $value . '\' not found.');
            return $optionalReturnValue;
        }
        if (strlen(trim($setting)) === 0) {
            $this->logging->error('Setting with path \'' . $path . $value . '\' is empty.');
            return $optionalReturnValue;
        }
        return trim($setting);
    }

    /**
     * @InheritDoc
     */
    public function isConfigValue($path, $value, $optionalReturnValue = false)
    {
        return ('1' === $this->getConfigValue($path, $value, ($optionalReturnValue ? '1' : '0')));
    }

    /**
     * @InheritDoc
     */
    public function getConfigDynamic($path, $value)
    {
        if (strlen($this->getConfigValue($path, $value)) === 0) {
            return [];
        }
        return $this->serializer->unserialize($this->getConfigValue($path, $value));
    }

    /**
     * @InheritDoc
     */
    public function getImagePlaceHolder()
    {
        $placeholder = $this->getConfigValue('catalog/placeholder/', 'image_placeholder');
        if (strlen($placeholder) === 0) {
            return '';
        }
        return $this->storeModelInterface->getBaseUrlMedia() . 'catalog/product/placeholder/'
            . $placeholder;
    }

    /**
     * @inheritDoc
     */
    public function getConfigValueAsArray($path, $value, $separator = ',')
    {
        $result = explode($separator, $this->getConfigValue($path, $value));
        if ($result === false) {
            return [];
        }
        return $result;
    }

    /**
     * @inheritDoc
     */
    public function isModuleEnabled(string $moduleName): bool
    {
        return $this->moduleManager->isEnabled($moduleName);
    }
}
