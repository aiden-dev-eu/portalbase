<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\AuthProfileInterface;
use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\ProfilesInterface;

/**
 * Model class for profiles information added top Api endpoints.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.06.15.0
 */
class Profiles extends DataObject implements ProfilesInterface
{

    /**
     * @inheritDoc
     */
    public function setProfileOptions(array $profiles)
    {
        return $this->setData(self::PROFILES, $profiles);
    }

    /**
     * @inheritDoc
     */
    public function addProfileOption(AuthProfileInterface $profile)
    {
        /** @var AuthProfileInterface[] $profiles */
        $profiles = $this->getProfileOptions();
        $profiles[] = $profile;
        return $this->setProfileOptions($profiles);
    }
    /**
     * @inheritDoc
     */
    public function getProfileOptions()
    {
        return $this->_getData(self::PROFILES);
    }

    /**
     * @inheritDoc
     */
    public function setUserProfile(int $userProfile)
    {
        return $this->setData(self::USER_PROFILE, $userProfile);
    }

    /**
     * @inheritDoc
     */
    public function getUserProfile()
    {
        return $this->_getData(self::USER_PROFILE);
    }

    /**
     * @inheritDoc
     */
    public function setCanEditProfiles(bool $canEditProfiles): ProfilesInterface
    {
        return $this->setData(self::PROFILE_EDIT, $canEditProfiles);
    }

    /**
     * @inheritDoc
     */
    public function getCanEditProfiles(): bool
    {
        return $this->_getData(self::PROFILE_EDIT) ?? false;
    }
}
