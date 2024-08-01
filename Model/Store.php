<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Helper\Data;
use Magento\Framework\UrlInterface;
use Magento\Framework\Locale\Resolver;
use Magento\Store\Model\StoreManagerInterface;
use Magento\Framework\Locale\CurrencyInterface;

/**
 * Class with functions concerning store.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.07.05.0
 */
class Store implements StoreInterface
{
    private Data $data;
    private Resolver $locale;
    private StoreManagerInterface $store;
    private CurrencyInterface $currency;
    private LoggingInterface $logger;

    /**
     * @param Data $data
     * @param Resolver $locale
     * @param StoreManagerInterface $store
     * @param CurrencyInterface $currency
     * @param LoggingInterface $logger
     */
    public function __construct(
        Data $data,
        Resolver $locale,
        StoreManagerInterface $store,
        CurrencyInterface $currency,
        LoggingInterface $logger
    ) {
        $this->data = $data;
        $this->locale = $locale;
        $this->store = $store;
        $this->currency = $currency;
        $this->logger = $logger;
    }

    /**
     * @InheritDoc
     */
    public function getLocale(): string
    {
        return $this->locale->getLocale();
    }

    /**
     * @InheritDoc
     */
    public function getLanguageCode() : string
    {
        $locale = explode('_', $this->getLocale());
        if (count($locale) < 2) {
            return 'EN';
        }
        return strtoupper($locale[0]);
    }

    /**
     * @InheritDoc
     */
    public function getCurrencySymbol($currencyCode)
    {
        if (strlen($currencyCode ?? '') === 0) {
            return '';
        }
        $symbol = $this->currency->getCurrency($currencyCode)->getSymbol();
        return $symbol;
    }

    /**
     * @InheritDoc
     */
    public function getBaseUrlMedia()
    {
        return $this->getBaseUrl(UrlInterface::URL_TYPE_MEDIA);
    }

    /**
     * @InheritDoc
     */
    public function getBaseUrl(string $type = UrlInterface::URL_TYPE_LINK)
    {
        try {
            return $this->store->getStore()->getBaseUrl($type);
        } catch (\Exception $e) {
            $this->logger->error("Error while fetching baseurl of type '" . $type . "': " . $e->getMessage());
            return '';
        }
    }

    /**
     * @InheritDoc
     */
    public function getStoreId()
    {
        return $this->getStore()->getId();
    }

    /**
     * @InheritDoc
     */
    public function getStoreName()
    {
        return $this->getStore()->getName();
    }

    /**
     * @InheritDoc
     */
    public function getWebSiteId()
    {
        return $this->getStore()->getWebsiteId();
    }

    /**
     * @inheritDoc
     */
    public function getStore()
    {
        return $this->store->getStore();
    }
}
