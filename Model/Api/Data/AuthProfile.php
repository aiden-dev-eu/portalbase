<?php

namespace Aiden\PortalBase\Model\Api\Data;

use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\AuthProfileInterface;

/**
 * Model class of profile option.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.06.15.0
 */
class AuthProfile extends DataObject implements AuthProfileInterface
{
    /**
     * @inheritDoc
     */
    public function setProfileId(int $profileId)
    {
        return $this->setData(self::PROFILE_ID, $profileId);
    }

    /**
     * @inheritDoc
     */
    public function getProfileId()
    {
        return $this->_getData(self::PROFILE_ID);
    }

    /**
     * @inheritDoc
     */
    public function setProfileName(string $profileName)
    {
        return $this->setData(self::PROFILE_NAME, $profileName);
    }

    /**
     * @inheritDoc
     */
    public function getProfileName()
    {
        return $this->_getData(self::PROFILE_NAME);
    }
}
