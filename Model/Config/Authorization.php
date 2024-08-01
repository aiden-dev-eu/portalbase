<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Config;

use Aiden\PortalBase\Constants\GeneralConstants;
use Aiden\PortalBase\Model\AuthorizationInterface;
use Aiden\PortalBase\Model\DataRepositoryInterface;
use Aiden\PortalBase\Model\LoggingInterface;
use Magento\Framework\Data\OptionSourceInterface;

/**
 * Defines authorization profiles retrieved from cache ofr DB.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.25.0
 */
class Authorization implements OptionSourceInterface
{
    /**
     * @var DataRepositoryInterface
     */
    private DataRepositoryInterface $dataRepository;
    /**
     * @var AuthorizationInterface
     */
    private AuthorizationInterface $authorization;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * @param DataRepositoryInterface $dataRepository
     * @param AuthorizationInterface $config
     * @param LoggingInterface $logging
     */
    public function __construct(
        DataRepositoryInterface $dataRepository,
        AuthorizationInterface $config,
        LoggingInterface $logging
    ) {
        $this->dataRepository = $dataRepository;
        $this->authorization = $config;
        $this->logging = $logging;
    }

    /**
     * @inheritDoc
     */
    public function toOptionArray()
    {
        $profiles = $this->authorization->getProfiles();
        $options = [];
        foreach ($profiles as $value => $label) {
            $options[] = [GeneralConstants::VALUE => (int) $value, GeneralConstants::LABEL => $label];
        }
        return $options;
    }
}
