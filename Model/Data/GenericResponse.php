<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

/**
 * Object representation op GenericResponse from SboWebConnector.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 *
 */
class GenericResponse extends DataObject implements GenericResponseInterface
{
    /**
     * @inheritDoc
     */
    public function getReturnCode()
    {
        return $this->_getData(self::RETURN_CODE);
    }

    /**
     * @inheritDoc
     */
    public function getMessage()
    {
        return $this->_getData(self::MESSAGE);
    }

    /**
     * @inheritDoc
     */
    public function getErrorDescription()
    {
        return $this->_getData(self::ERROR_DESCRIPTION);
    }
}
