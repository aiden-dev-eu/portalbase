<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Framework\UrlInterface;

interface StoreInterface
{
    /**
     * Get current Magento Locale
     *
     * @return string
     */
    public function getLocale(): string;

    /**
     * Gets Language code (first parte of locale)
     *
     * @return string
     */
    public function getLanguageCode(): string;

    /**
     * Get currency symbol.
     *
     * @param string $currencyCode
     * @return string
     */
    public function getCurrencySymbol($currencyCode);

    /**
     * Get base url media folder.
     *
     * @return string
     */
    public function getBaseUrlMedia();

    /**
     * Get Base Url of this store
     *
     * @param string $type
     * @return string
     */
    public function getBaseUrl(string $type = UrlInterface::URL_TYPE_LINK);

    /**
     * Returns store id.
     *
     * @return int
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getStoreId();

    /**
     * Return store name.
     *
     * @return string
     */
    public function getStoreName();

    /**
     * Returns website id.
     *
     * @return int
     */
    public function getWebSiteId();

    /**
     * Returns Store.
     *
     * @return \Magento\Store\Api\Data\StoreInterface
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getStore();
}
