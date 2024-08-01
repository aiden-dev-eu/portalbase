<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of profiles information added top Api endpoints.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.06.13.0
 */
interface ProfilesInterface
{
    public const PROFILES = 'profile_options';
    public const USER_PROFILE = 'user_profile';
    public const PROFILE_EDIT = 'profile_edit';

    /**
     * Sets profiles.
     *
     * @param \Aiden\PortalBase\Api\Data\AuthProfileInterface[] $profiles
     * @return $this
     */
    public function setProfileOptions(array $profiles);

    /**
     * Add profile
     *
     * @param \Aiden\PortalBase\Api\Data\AuthProfileInterface $profile
     * @return $this
     */
    public function addProfileOption(AuthProfileInterface $profile);

    /**
     * Gets profiles
     *
     * @return \Aiden\PortalBase\Api\Data\AuthProfileInterface[]
     */
    public function getProfileOptions();

    /**
     * Sets user profile
     *
     * @param int $userProfile
     * @return $this
     */
    public function setUserProfile(int $userProfile);

    /**
     * Gets user profile
     *
     * @return int
     */
    public function getUserProfile();

    /**
     * Set if logged-in user can edit authorization profiles
     *
     * @param bool $canEditProfiles
     * @return ProfilesInterface
     */
    public function setCanEditProfiles(bool $canEditProfiles): ProfilesInterface;

    /**
     * Get if logged-in user can edit authorization profiles
     *
     * @return bool
     */
    public function getCanEditProfiles(): bool;
}
