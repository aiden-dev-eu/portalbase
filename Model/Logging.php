<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Constants\ConfigConstants;
use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\ScopeInterface;
use Psr\Log\LoggerInterface;
use Monolog\Logger;
use Magento\Store\Model\StoreManagerInterface;

/**
 * Simple wrapper class for logging
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */
class Logging implements LoggingInterface
{
    private LoggerInterface $logging;
    private ScopeConfigInterface $settings;
    private StoreManagerInterface $store;

    /**
     * Logging constructor.
     *
     * @param LoggerInterface $logger
     * @param ScopeConfigInterface $settings
     * @param StoreManagerInterface $store
     */
    public function __construct(
        LoggerInterface $logger,
        ScopeConfigInterface $settings,
        StoreManagerInterface $store
    ) {
        $this->logging = $logger;
        $this->settings = $settings;
        $this->store = $store;
    }

    /**
     * @InheritDoc
     */
    public function info($message, $context = [])
    {
        $this->log($this->getLogCallLocation() . $message, Logger::INFO, $context);
    }

    /**
     * @InheritDoc
     */
    public function warn($message, $context = [])
    {
        $this->log($this->getLogCallLocation() . $message, Logger::WARNING, $context);
    }

    /**
     * @InheritDoc
     */
    public function error($message, $context = [])
    {
        $this->log($this->getLogCallLocation() . $message, Logger::ERROR, $context);
    }

    /**
     * Logs message to Portal log, filters on desired level.
     *
     * @param string $message
     * @param int $level
     * @param array $context
     * @throws NoSuchEntityException
     */
    private function log($message, $level, $context = [])
    {
        if ($level >= $this->getLoggingLevel()) {
            $this->logging->log($level, $message, $context);
        }
    }

    /**
     * Gets current logging level.
     *
     * @return int
     * @throws NoSuchEntityException
     */
    private function getLoggingLevel(): int {
        return (int) $this->settings->getValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_DEBUG . 'logging',
            ScopeInterface::SCOPE_STORE,
            $this->store->getStore()->getId()
        );
    }

    /**
     * Determines the class, function and line the log function was called from.
     *
     * @return string
     */
    public function getLogCallLocation(): string {
        $dbt = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS,3);
        $class = $dbt[2]['class'] ?? null;
        $function = $dbt[2]['function'] ?? null;
        $line = $dbt[2]['line'] ?? null;
        return 'Class: ' . $class . ' Function: ' . $function . ' Line: ' . $line . ': ';
    }
}
