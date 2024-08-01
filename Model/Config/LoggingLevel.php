<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Config;

use Aiden\PortalBase\Constants\GeneralConstants;
use Magento\Framework\Data\OptionSourceInterface;
use Monolog\Logger;

/**
 * Defines logging levels for a admin config setting.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 */
class LoggingLevel implements OptionSourceInterface
{
    /**
     * @inheritDoc
     */
    public function toOptionArray()
    {
        return [
            [GeneralConstants::VALUE => Logger::INFO, GeneralConstants::LABEL => __('Info')],
            [GeneralConstants::VALUE => Logger::WARNING, GeneralConstants::LABEL => __('Warn')],
            [GeneralConstants::VALUE => Logger::ERROR, GeneralConstants::LABEL => __('Error')]
        ];
    }
}
