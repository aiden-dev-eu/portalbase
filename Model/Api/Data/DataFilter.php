<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\DataFilterInterface;
use Magento\Framework\DataObject;

/**
 * Object representation of DataFilter.
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
class DataFilter extends DataObject implements DataFilterInterface
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
    public function setValue(string $value)
    {
        return $this->setData(self::VALUE, $value);
    }

    /**
     * @inheritDoc
     */
    public function getValue()
    {
        return $this->_getData(self::VALUE);
    }

    /**
     * @inheritDoc
     */
    public function setCondition(string $condition)
    {
        return $this->setData(self::CONDITION, $condition);
    }

    /**
     * @inheritDoc
     */
    public function getCondition()
    {
        return $this->_getData(self::CONDITION);
    }
}
