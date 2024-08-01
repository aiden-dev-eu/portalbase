<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Config;

use Aiden\PortalBase\Constants\GeneralConstants;
use Magento\Framework\Data\OptionSourceInterface;

/**
 * Defines sorting direction for data calls to SboWebConnector.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.25.0
 */
class SortDirection implements OptionSourceInterface
{
    public const ASCENDING = 'ASC';
    public const DESCENDING = 'DESC';
    /**
     * @inheritDoc
     */
    public function toOptionArray()
    {
        return [
            [GeneralConstants::VALUE => self::ASCENDING, GeneralConstants::LABEL => __('Ascending')],
            [GeneralConstants::VALUE => self::DESCENDING, GeneralConstants::LABEL => __('Descending')]
        ];
    }
}
