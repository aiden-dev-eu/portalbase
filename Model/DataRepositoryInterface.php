<?php
declare(strict_types=1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Api\Data\ApiDataRequestInterface;
use Aiden\PortalBase\Api\Data\FileDownloadInterface;
use Aiden\PortalBase\Api\Data\TierPriceInterface;
use Aiden\PortalBase\Model\Data\ApiObjectResponseInterface;
use Aiden\PortalBase\Model\Data\DataRequestInterface;
use Aiden\PortalBase\Model\Data\DataResponseInterface;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Framework\Exception\AuthorizationException;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;

interface DataRepositoryInterface
{
    /**
     * Executes a select task and converts and returns associative array with the result.
     *
     * @deprecated should be replaced with {@see dataRetrieve()}.
     * @param string $taskCode
     * @param array $parameters
     * @return array
     * @throws LocalizedException Call to SboWebConnector fails
     */
    public function executeTask($taskCode, array $parameters);

    /**
     * Executes update task via SboWebConnector.
     *
     * @deprecated Should be replaced with new endpoint in the same style as {@see dataRetrieve()}.
     * @param string $taskCode
     * @param array $parameters
     * @return array|bool
     * @throws LocalizedException
     */
    public function executeUpdateTask($taskCode, array $parameters);

    /**
     * Downloads file from SAP server via SboWebConnector.
     *
     * @param string $docEntry
     * @param string $documentType
     * @return FileDownloadInterface
     * @throws AuthorizationException
     * @throws LocalizedException
     * @throws NoSuchEntityException
     */
    public function downloadDocument($docEntry, $documentType);

    /**
     * Executes checkAndUpgrade process for Portal 3 in SboWebConnector.
     *
     * @return \Aiden\PortalBase\Model\Data\GenericResponseInterface
     */
    public function checkAndUpgradePortal();

    /**
     * Retrieves data for Portal 3 via SboWebConnector.
     *
     * @param \Aiden\PortalBase\Api\Data\ApiDataRequestInterface $request
     * @return \Aiden\PortalBase\Model\Data\DataResponseInterface
     * @throws LocalizedException
     */
    public function dataRetrieve(ApiDataRequestInterface $request): DataResponseInterface;

    /**
     * Process SBO ApiObject via SboWebConnector
     *
     * @param string $processorClassName
     * @param array $header
     * @param array $lines
     * @return ApiObjectResponseInterface
     * @throws \Exception when Api call itself went wrong
     */
    public function processSboApiObjectWithLines(string $processorClassName, array $header, array $lines): ApiObjectResponseInterface;

    /**
     * Process SBO ApiObject via SboWebConnector
     *
     * @param string $processorClassName
     * @param array $header
     * @return ApiObjectResponseInterface
     * @throws \Exception when Api call itself went wrong
     */
    public function processSboApiObject(string $processorClassName, array $header): ApiObjectResponseInterface;

    /**
     * Process multiple Sbo Api Objects in one call.
     *
     * @param string $processorClassName
     * @param array $objects
     * @return ApiObjectResponseInterface[]
     * @throws \Exception when Api call itself went wrong
     */
    public function processMultipleSboApiObjects(string $processorClassName, array $objects): array;

    /**
     * Retrieve customer specific prices
     *
     * @param ProductInterface[] $products
     * @return void
     */
    public function getCustomerProductPrices(array $products): void;

    /**
     * Retrieve tier prices by SKU
     *
     * @param string $sku
     * @return TierPriceInterface[]|null if no tier prices or error
     */
    public function getTierPricesBySku(string $sku): ?array;
}
