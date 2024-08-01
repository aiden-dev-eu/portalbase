<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

interface ConfigInterface
{
    public const KEY_SBO_CONNECTOR_UPGRADE = 'sbo_connector_upgrade';
    /**
     * Retrieves config value
     *
     * @param string $path
     * @param string $value
     * @param string $optionalReturnValue
     * @return string
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getConfigValue($path, $value, $optionalReturnValue = '');

    /**
     * Retrieves config value
     *
     * @param string $path
     * @param string $value
     * @param string $optionalReturnValue
     * @return string
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getConfigValueForStore(string $path, string $value, int $storeId, $optionalReturnValue = '');

    /**
     * Returns config value as boolean
     *
     * @param string $path
     * @param string $value
     * @param boolean $optionalReturnValue
     * @return bool
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function isConfigValue($path, $value, $optionalReturnValue = false);

    /**
     * Retrieves dynamic config value as array.
     *
     * @param string $path
     * @param string $value
     * @return array
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getConfigDynamic($path, $value);

    /**
     * Get image placeholder url.
     *
     * @return string
     */
    public function getImagePlaceHolder();

    /**
     * Retrieves config value as array
     *
     * @param string $path
     * @param string $value
     * @param string $separator
     * @return string[]
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getConfigValueAsArray($path, $value, $separator = ',');

    /**
     * Returns if module is active.
     *
     * @param string $moduleName
     * @return bool
     */
    public function isModuleEnabled(string $moduleName): bool;
}
