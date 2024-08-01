<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

interface LoggingInterface
{
    /**
     * Logs info message to Portal log
     *
     * @param string $message
     * @param array $context
     */
    public function info($message, $context = []);

    /**
     * Logs warning message to Portal log
     *
     * @param string $message
     * @param array $context
     */
    public function warn($message, $context = []);

    /**
     * Logs error message to Portal log
     *
     * @param string $message
     * @param array $context
     */
    public function error($message, $context = []);
}
