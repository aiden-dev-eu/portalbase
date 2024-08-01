<?php

declare(strict_types=1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Api\Data\ApiDataRequestInterface;
use Aiden\PortalBase\Api\Data\FileDownloadInterface;
use Aiden\PortalBase\Api\Data\FileDownloadInterfaceFactory;
use Aiden\PortalBase\Api\Data\TierPriceInterface;
use Aiden\PortalBase\Api\Data\TierPriceInterfaceFactory;
use Aiden\PortalBase\Constants\ConfigConstants;
use Aiden\PortalBase\Helper\Data;
use Aiden\PortalBase\Model\Data\ApiObjectResponseInterface;
use Aiden\PortalBase\Model\Data\ApiObjectResponseInterfaceFactory;
use Aiden\PortalBase\Model\Data\DataResponseInterface;
use Aiden\PortalBase\Model\Data\DataResponseInterfaceFactory;
use Aiden\PortalBase\Model\Data\GenericResponseInterface;
use Aiden\PortalBase\Model\Data\GenericResponseInterfaceFactory;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Module\ModuleListInterface;
use Serac\ERPConnector\Model\CatalogSession;
use Serac\ERPConnector\Model\CommonFunctions;
use Serac\ERPConnector\Model\SBOWebConnectorClient;

/**
 * Retrieves data and files from SAP server.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */
class DataRepository implements DataRepositoryInterface
{
    private const ENDPOINT_CHECK_AND_UPGRADE = 'magentoPortalCheckAndUpgrade';
    private const ENDPOINT_DATA_RETRIEVE = 'magentoPortalDataRetrieve';

    private const ERROR_DESCRIPTION = 'errorDescription';
    private const RESULT = 'result';
    private const RESPONSES = 'responses';
    /**
     * @var SBOWebConnectorClient
     */
    private SBOWebConnectorClient $webConnectorClient;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;
    /**
     * @var CustomerRepositoryInterface
     */
    private CustomerRepositoryInterface $customer;
    /**
     * @var Data
     */
    private Data $data;
    /**
     * @var StoreInterface
     */
    private StoreInterface $store;
    /**
     * @var GenericResponseInterfaceFactory
     */
    private GenericResponseInterfaceFactory $genericResponseFactory;
    /**
     * @var DataResponseInterfaceFactory
     */
    private DataResponseInterfaceFactory $dataResponseFactory;
    /**
     * @var FileDownloadInterfaceFactory
     */
    private FileDownloadInterfaceFactory $fileDownloadFactory;
    /**
     * @var SessionInterface
     */
    private SessionInterface $session;
    /**
     * @var ApiObjectResponseInterfaceFactory
     */
    private ApiObjectResponseInterfaceFactory $apiObjectResponseFactory;
    /**
     * @var ModuleListInterface
     */
    private ModuleListInterface $moduleList;
    /**
     * @var CommonFunctions
     */
    private CommonFunctions $commonFunctions;
    /**
     * @var CatalogSession
     */
    private CatalogSession $catalogSession;
    /**
     * @var ConfigInterface
     */
    private ConfigInterface $configInterface;
    /**
     * @var TierPriceInterfaceFactory
     */
    private TierPriceInterfaceFactory $tierPriceFactory;

    /**
     * @param SBOWebConnectorClient $webConnectorClient
     * @param LoggingInterface $logging
     * @param CustomerRepositoryInterface $customer
     * @param Data $data
     * @param StoreInterface $store
     * @param GenericResponseInterfaceFactory $genericResponseFactory
     * @param DataResponseInterfaceFactory $dataResponseFactory
     * @param FileDownloadInterfaceFactory $fileDownloadFactory
     * @param SessionInterface $session
     * @param ApiObjectResponseInterfaceFactory $apiObjectResponseFactory
     * @param ModuleListInterface $moduleList
     * @param CommonFunctions $commonFunctions
     * @param CatalogSession $catalogSession
     * @param ConfigInterface $configInterface
     * @param TierPriceInterfaceFactory $tierPriceFactory
     */
    public function __construct(
        SBOWebConnectorClient $webConnectorClient,
        LoggingInterface $logging,
        CustomerRepositoryInterface $customer,
        Data $data,
        StoreInterface $store,
        GenericResponseInterfaceFactory $genericResponseFactory,
        DataResponseInterfaceFactory $dataResponseFactory,
        FileDownloadInterfaceFactory $fileDownloadFactory,
        SessionInterface $session,
        ApiObjectResponseInterfaceFactory $apiObjectResponseFactory,
        ModuleListInterface $moduleList,
        CommonFunctions $commonFunctions,
        CatalogSession $catalogSession,
        ConfigInterface $configInterface,
        TierPriceInterfaceFactory $tierPriceFactory,
    ) {
        $this->webConnectorClient = $webConnectorClient;
        $this->logging = $logging;
        $this->customer = $customer;
        $this->data = $data;
        $this->store = $store;
        $this->genericResponseFactory = $genericResponseFactory;
        $this->dataResponseFactory = $dataResponseFactory;
        $this->fileDownloadFactory = $fileDownloadFactory;
        $this->session = $session;
        $this->apiObjectResponseFactory = $apiObjectResponseFactory;
        $this->moduleList = $moduleList;
        $this->commonFunctions = $commonFunctions;
        $this->catalogSession = $catalogSession;
        $this->configInterface = $configInterface;
        $this->tierPriceFactory = $tierPriceFactory;
    }

    /**
     * @InheritDoc
     */
    public function executeTask($taskCode, array $parameters)
    {
        $result = $this->webConnectorClient->executeTaskWithParameters($taskCode, $parameters);
        if ($result === false) {
            throw new LocalizedException($this->webConnectorClient->getErrorDescription());
        }
        return $this->toAssocArray($result);
    }

    /**
     * @InheritDoc
     */
    public function executeUpdateTask($taskCode, array $parameters)
    {
        $result = $this->webConnectorClient->executeUpdateTaskWithParameters($taskCode, $parameters);
        if ($result === false) {
            throw new LocalizedException($this->webConnectorClient->getErrorDescription());
        }
        return $result;
    }

    /**
     * @InheritDoc
     */
    public function downloadDocument($docEntry, $documentType)
    {
        $this->logging->info('Result of docEntry & documentType: ' . $docEntry . ' & ' . $documentType);
        $parameters = [
            'cardCode' => $this->customer->getCardCode(),
            'docEntry' => $docEntry,
            'objectType' => $documentType,
            'atcLine' => '0'
        ];
        $result = $this->webConnectorClient->downloadDocument($parameters);

        /** @var FileDownloadInterface $fileDownload */
        $fileDownload = $this->fileDownloadFactory->create();
        $fileDownload->setData($result);

        if ($fileDownload->getReturnCode() !== 200) {
            $this->logging->error(
                __(
                    'An error occurred calling "%1" SboWebConnector endpoint: %2. Function downloadDocument.',
                    'downloadDocument',
                    $fileDownload->getErrorDescription()
                ),
                $parameters
            );
            throw new LocalizedException(
                __(
                    $fileDownload->getErrorDescription()
                )
            );
        }
        return $fileDownload;
    }

    /**
     * Converts query result to associative array.
     *
     * @param array $values Query result
     * @return array Associative array
     */
    private function toAssocArray(array $values)
    {
        $records = $this->data->getArray($values, 'records');
        $names = $this->data->getArray($values, 'columnNames');
        $assocArray =[];
        foreach ($records as $record) {
            $values = $this->data->getArray($record, 'values');
            $assocValue = [];
            $index = 0;
            foreach ($values as $value) {
                $assocValue += [$names[$index++] => $value];
            }
            $assocArray[] = $assocValue;
        }
        return $assocArray;
    }

    /**
     * @inheritDoc
     */
    public function checkAndUpgradePortal()
    {
        $activeModules = $this->getEnabledPortalModules();
        $result = $this->webConnectorClient->callPortalEndpoint(
            self::ENDPOINT_CHECK_AND_UPGRADE,
            ['modules' => $activeModules]
        );
        $this->logging->warn("Result of upgrade call", $result);
        /**
         * @var GenericResponseInterface $genericResponse
         */
        $genericResponse = $this->genericResponseFactory->create()->addData($result);
        $this->logging->warn("ReturnCode: " . $genericResponse->getReturnCode());
        if ($genericResponse->getReturnCode() != 200) {
            $this->logging->error(
                __(
                    'An error occurred calling "%1" SboWebConnector endpoint: %2. Function checkAndUpgradePortal.',
                    self::ENDPOINT_CHECK_AND_UPGRADE,
                    $genericResponse->getErrorDescription()
                ),
                $activeModules
            );
            throw new LocalizedException(
                __(
                    'An error occurred calling SboWebConnector endpoint "%1", see logs for more detail.',
                    self::ENDPOINT_CHECK_AND_UPGRADE
                )
            );
        }
        if (strlen(trim($genericResponse->getMessage())) > 0) {
            $this->logging->info(
                __(
                    'Message from SboWebConnector endpoint "%1": %2',
                    self::ENDPOINT_CHECK_AND_UPGRADE,
                    $genericResponse->getMessage()
                )
            );
        }
        return $genericResponse;
    }

    /**
     * Returns an array of active Portal modules.
     *
     * @return string[]
     */
    private function getEnabledPortalModules()
    {
        $activeModules = $this->moduleList->getAll();
        $filtered = [];
        foreach ($activeModules as $module) {
            if (!array_key_exists('name', $module)) {
                continue;
            }
            $name = $module['name'];
            if (str_starts_with($name, 'Aiden_Portal')) {
                $filtered[] = $name;
            }
        }
        return $filtered;
    }

    /**
     * @inheritDoc
     */
    public function dataRetrieve(ApiDataRequestInterface $request): DataResponseInterface
    {
        $request->setCardCode($this->customer->getCardCode());
        $request->setContactCode($this->customer->getContactCode());
        $request->setCustomerId($this->customer->getId());
        $request->setLanguageCode($this->store->getLanguageCode());
        $this->logging->info("Data retrieve request: ", $request->toArray());
//        If this is the first query executed, the upgrade script should be executed first, keep track with
//        session value.
        $updatedSboWebCon = $this->session->getSessionValue(SessionInterface::KEY_SBO_CONNECTOR_UPGRADE, false);
        if (!$updatedSboWebCon) {
            $this->checkAndUpgradePortal();
            $this->session->setSessionValue(SessionInterface::KEY_SBO_CONNECTOR_UPGRADE, true);
        }
        $result = $this->webConnectorClient->callPortalEndpoint(
            self::ENDPOINT_DATA_RETRIEVE,
            ['magentoPortalDataRequest' => $request->toArray()]
        );
        /**
         * @phpstan-ignore-next-line
         * @var DataResponseInterface $dataResponse
         */
        $dataResponse = $this->dataResponseFactory->create()->addData($result);
        if ($dataResponse->getReturnCode() !== 200) {
            $this->logging->error(
                __(
                    'An error occurred calling "%1" SboWebConnector endpoint: %2. Function dataRetrieve.',
                    self::ENDPOINT_DATA_RETRIEVE,
                    $dataResponse->getErrorDescription()
                ),
                $request->toArray()
            );
            throw new LocalizedException(
                __(
                    'An error occurred calling SboWebConnector endpoint "%1", see logs for more detail.',
                    self::ENDPOINT_DATA_RETRIEVE
                )
            );
        }
        return $dataResponse;
    }

    /**
     * @inheritDoc
     */
    public function processSboApiObjectWithLines(string $processorClassName, array $header, array $lines): ApiObjectResponseInterface
    {
        $answer = $this->webConnectorClient->processSboApiObjectWithLines($processorClassName, $header, $lines, true);
        return $this->processSboApiObjectResponse($answer);
    }

    /**
     * @inheritDoc
     */
    public function processSboApiObject(string $processorClassName, array $header): ApiObjectResponseInterface
    {
        $answer = $this->webConnectorClient->processSboApiObject($processorClassName, $header, true);
        return $this->processSboApiObjectResponse($answer);
    }

    /**
     * @inheritDoc
     */
    public function processMultipleSboApiObjects(string $processorClassName, array $objects): array
    {
        $answer = $this->webConnectorClient->processMultipleSboApiObjects($processorClassName, $objects, true);
        return $this->processMultipleSboApiObjectsResponse($answer);
    }

    /**
     * Formats multiple Sbo Api Objects into uniform objects
     *
     * @param array $answer
     * @return ApiObjectResponseInterface[]
     * @throws Exception when Api call itself went wrong
     */
    private function processMultipleSboApiObjectsResponse(array $answer): array
    {
        $result = $this->processGeneralResult($answer);
        $responses = [];
        if (array_key_exists(self::RESPONSES, $result)) {
            $responses = $result[self::RESPONSES];
        }
        foreach ($responses as $response) {
            $results[] = $this->processSingleResult($response);
        }
        return $results;
    }

    /**
     * Formats Sbo Api Object response into uniform object
     *
     * @param array $answer
     * @return ApiObjectResponseInterface
     * @throws Exception when Api call itself went wrong
     */
    private function processSboApiObjectResponse(array $answer): ApiObjectResponseInterface
    {
        /** @var ApiObjectResponseInterface $response */
        $result = $this->processGeneralResult($answer);
        return $this->processSingleResult($result);
    }

    /**
     * Checks if Api call went wrong, if not returns results.
     *
     * @param array $answer
     * @return array
     * @throws Exception when Api call itself went wrong
     */
    private function processGeneralResult(array $answer): array
    {
        $result = false;
        if (array_key_exists(self::RESULT, $answer)) {
            $result = $answer[self::RESULT];
        }
        if ($result === false && array_key_exists(self::ERROR_DESCRIPTION, $answer)
            && strlen($answer[self::ERROR_DESCRIPTION]) > 0) {
            throw new Exception($answer[self::ERROR_DESCRIPTION]);
        }
        return $result;
    }

    /**
     * Turns single result into uniform object.
     *
     * @param array $result
     * @return ApiObjectResponseInterface
     */
    private function processSingleResult(array $result): ApiObjectResponseInterface
    {
        $response = $this->apiObjectResponseFactory->create();
        return $response->parseData($result);
    }

    /**
     * @inheritDoc
     */
    public function getCustomerProductPrices(array $products): void
    {
        $this->commonFunctions->getCustomerProductPrices($products, $this->customer->getCardCode());
    }

    /**
     * @inheritDoc
     */
    public function getTierPricesBySku(string $sku): ?array
    {
        if ($this->isTierPricingEnabled() === false) {
            return null;
        }

        $priceInfo = $this->catalogSession->getCachedPriceInfo(
            $this->customer->getCardCode(),
            $sku
        );

        if (empty($priceInfo) === true) {
            $this->logging->info(
                __('Unable to retrieve tier prices for product with sku ' . $sku . ', priceInfo empty.')
            );
            return null;
        }

        if (array_key_exists(CommonFunctions::PRICES_BY_QUANTITY, $priceInfo) === false) {
            $this->logging->info(
                __('Unable to retrieve tier prices for product with sku ' . $sku . ', pricesByQuantity nonexistent')
            );
            return null;
        }

        if (empty($priceInfo[CommonFunctions::PRICES_BY_QUANTITY]) === true) {
            return null;
        }

        $tiers = [];
        foreach ($priceInfo[CommonFunctions::PRICES_BY_QUANTITY] as $key => $value) {
            /** @var TierPriceInterface $tier */
            $tier = $this->tierPriceFactory->create();
            $tiers[] = $tier->setQty((int)$key)->setPrice((float)$value);
        }

        return $tiers;
    }

    /**
     * Return backend config value
     *
     * @return bool
     */
    private function isTierPricingEnabled(): bool
    {
        try {
            return $this->configInterface->isConfigValue(
                ConfigConstants::BASE_PATH . ConfigConstants::SUB_SECTION_TIER_PRICING,
                'enable'
            );
        } catch (NoSuchEntityException $e) {
            $this->logging->info($e->getMessage());
            return false;
        }
    }
}
