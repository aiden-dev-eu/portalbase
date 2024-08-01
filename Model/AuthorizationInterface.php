<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Framework\Exception\LocalizedException;

/**
 * Interface containing functions related to authorization
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
interface AuthorizationInterface
{
    public const PROFILE_EVERYONE = 999;
    public const PROFILE_NO_ONE = -1;
    /**
     * Retrieves authorization profiles from cache or db.
     *
     * @param bool $everyoneIfEmpty
     * @return array
     * @throws LocalizedException
     */
    public function getProfiles(bool $everyoneIfEmpty = true);
}
