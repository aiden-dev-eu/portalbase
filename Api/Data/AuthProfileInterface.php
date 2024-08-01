<?php

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of profile option.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.06.15.0
 */
interface AuthProfileInterface
{
    public const PROFILE_ID = 'profile_id';
    public const PROFILE_NAME = 'profile_name';

    /**
     * Set profile id.
     *
     * @param int $profileId
     * @return $this
     */
    public function setProfileId(int $profileId);

    /**
     *Get Profile id
     *
     * @return int
     */
    public function getProfileId();

    /**
     * Set profile name
     *
     * @param string $profileName
     * @return $this
     */
    public function setProfileName(string $profileName);

    /**
     * Get profile name
     *
     * @return string
     */
    public function getProfileName();
}
