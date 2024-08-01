<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Constants\ConfigConstants;
use Aiden\PortalBase\Helper\Data;
use Aiden\PortalBase\Api\Data\ApiDataRequestInterface;
use Aiden\PortalBase\Api\Data\ApiDataRequestInterfaceFactory;
use Aiden\PortalBase\Model\Data\DataResponseInterface;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Message\ManagerInterface;

/**
 * Model class containing functions related to authorization
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
class Authorization implements AuthorizationInterface
{
    private const CACHE_KEY_AUTH_PROF = 'auth_profiles';
    /**
     * @var SessionInterface
     */
    private SessionInterface $session;
    /**
     * @var DataRepositoryInterface
     */
    private DataRepositoryInterface $dataRepository;
    /**
     * @var ConfigInterface
     */
    private ConfigInterface $config;
    /**
     * @var ManagerInterface
     */
    private ManagerInterface $message;
    /**
     * @var ApiDataRequestInterfaceFactory
     */
    private ApiDataRequestInterfaceFactory $dataRequestFactory;
    /**
     * @var CustomerRepositoryInterface
     */
    private CustomerRepositoryInterface $customerRepository;
    /**
     * @var Data
     */
    private Data $utils;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * @param SessionInterface $session
     * @param DataRepositoryInterface $dataRepository
     * @param ConfigInterface $config
     * @param ManagerInterface $message
     * @param ApiDataRequestInterfaceFactory $dataRequestFactory
     * @param CustomerRepositoryInterface $customerRepository
     * @param Data $utils
     * @param LoggingInterface $logging
     */
    public function __construct(
        SessionInterface $session,
        DataRepositoryInterface $dataRepository,
        ConfigInterface $config,
        ManagerInterface $message,
        ApiDataRequestInterfaceFactory $dataRequestFactory,
        CustomerRepositoryInterface $customerRepository,
        Data $utils,
        LoggingInterface $logging
    ) {
        $this->session = $session;
        $this->dataRepository = $dataRepository;
        $this->config = $config;
        $this->message = $message;
        $this->dataRequestFactory = $dataRequestFactory;
        $this->customerRepository = $customerRepository;
        $this->utils = $utils;
        $this->logging = $logging;
    }

    /**
     * @inheritDoc
     */
    public function getProfiles(bool $allowEveryoneIfempty = true)
    {
        $profiles = $this->session->getSessionValue(self::CACHE_KEY_AUTH_PROF, []);
        if (empty($profiles)) {
            try {
                $profiles = $this->retrieveAuthProfiles();
                $this->session->setSessionValue(self::CACHE_KEY_AUTH_PROF, $profiles);
            } catch (LocalizedException $e) {
                $this->message->addErrorMessage($e->getMessage());
            }
        }
        if ($allowEveryoneIfempty && empty($profiles)) {
            $profiles += [ self::PROFILE_EVERYONE => __('Everyone') ];
        }
        if (!empty($profiles)) {
            $profiles += [ self::PROFILE_NO_ONE => __('No one')];
        }
        return $profiles;
    }

    /**
     * Retrieves Authorization profiles from DB.
     *
     * @return array
     * @throws \Magento\Framework\Exception\NoSuchEntityException|LocalizedException
     */
    private function retrieveAuthProfiles()
    {
        $taskCode = $this->config->getConfigValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_API_TASK_CODES,
            'authorization'
        );
        if (strlen(trim($taskCode)) === 0) {
            $this->message->addErrorMessage('No taskcode found for authorizations in config settings.');
        }
        /** @var ApiDataRequestInterface $request */
        $request = $this->dataRequestFactory->create();
        $request->setTaskCode($taskCode);
        /** @var DataResponseInterface $result */
        $result = $this->dataRepository->dataRetrieve($request);
        $this->logging->info("Result of result->getResults: ", $result->getResults());
        if ($result->getRecordCount() < 1) {
            $this->message->addErrorMessage('Unable to retrieve authorization profiles.');
            return [];
        }
        return $this->utils->toValidValuesArray($result->getResults());
    }
}
