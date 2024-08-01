<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\DataOrderInterface;
use Magento\Framework\DataObject;

/**
 * Object representation of DataOrder.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 *
 */
class DataOrder extends DataObject implements DataOrderInterface
{
    /**
     * @inheritDoc
     */
    public function setFieldName(string $fieldName)
    {
        return $this->setData(self::FIELD_NAME, $fieldName);
    }

    /**
     * @inheritDoc
     */
    public function getFieldName()
    {
        return $this->_getData(self::FIELD_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setDirection(string $direction)
    {
        return $this->setData(self::DIRECTION, $direction);
    }

    /**
     * @inheritDoc
     */
    public function getDirection()
    {
        return $this->_getData(self::DIRECTION);
    }
}
