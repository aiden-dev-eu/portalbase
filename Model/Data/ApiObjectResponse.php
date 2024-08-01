<?php

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

class ApiObjectResponse extends DataObject implements ApiObjectResponseInterface
{
    private const ENTRY = 'entry';
    private const KEY = 'key';
    private const VALUE = 'value';
    /**
     * @inheritDoc
     */
    public function parseData(array $data): ApiObjectResponseInterface
    {
        foreach ($data as $key => $value) {
            $this->setValue($key, $value);
        }
        return $this;
    }

    /**
     * Sets and converts a single value
     *
     * @param string $key
     * @param mixed $value
     * @return ApiObjectResponseInterface
     */
    private function setValue(string $key, mixed $value): ApiObjectResponseInterface
    {
        switch ($key) {
            case self::ADDED:
                return $this->setAdded((bool) $value);
            case self::UPDATED:
                return $this->setUpdated((bool) $value);
            case self::DELETED:
                return $this->setDeleted((bool) $value);
            case self::OBJECT_NAME:
                return $this->setObjectName($value);
            case self::FIELDS:
                return $this->parseFields($value);
            default:
                return $this->setData($key, $value);
        }
    }

    /**
     * Parses the fields in an assoc array sets it.
     *
     * @param array $fields
     * @return ApiObjectResponseInterface
     */
    private function parseFields(array $fields): ApiObjectResponseInterface
    {
        $entry = [];
        if (array_key_exists(self::ENTRY, $fields)) {
            $entry = $fields[self::ENTRY];
        }
        $fields = [];
        foreach ($entry as $field) {
            if (!array_key_exists(self::KEY, $field) || !array_key_exists(self::VALUE, $field)) {
                continue;
            }
            $fields[$field[self::KEY]] = $field[self::VALUE];
        }
        if (array_key_exists(self::ERROR_DESCRIPTION, $fields) && strlen($fields[self::ERROR_DESCRIPTION]) > 0) {
            $this->setErrorDescription($fields[self::ERROR_DESCRIPTION]);
        }
        return $this->setFields($fields);
    }
    /**
     * @inheritDoc
     */
    public function setObjectName(string $objectName)
    {
        return $this->setData(self::OBJECT_NAME, $objectName);
    }

    /**
     * @inheritDoc
     */
    public function getObjectName()
    {
        return $this->getData(self::OBJECT_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setAdded(bool $added)
    {
        return $this->setData(self::ADDED, $added);
    }

    /**
     * @inheritDoc
     */
    public function isAdded()
    {
        return $this->_getData(self::ADDED);
    }

    /**
     * @inheritDoc
     */
    public function setUpdated(bool $updated)
    {
        return $this->setData(self::UPDATED, $updated);
    }

    /**
     * @inheritDoc
     */
    public function isUpdated()
    {
        return $this->_getData(self::UPDATED);
    }

    /**
     * @inheritDoc
     */
    public function setDeleted(bool $deleted)
    {
        return $this->setData(self::DELETED, $deleted);
    }

    /**
     * @inheritDoc
     */
    public function isDeleted()
    {
        return $this->_getData(self::DELETED);
    }

    /**
     * @inheritDoc
     */
    public function setErrorDescription(string $errorDescription)
    {
        return $this->setData(self::ERROR_DESCRIPTION, $errorDescription);
    }

    /**
     * @inheritDoc
     */
    public function getErrorDescription()
    {
        return $this->_getData(self::ERROR_DESCRIPTION);
    }

    /**
     * @inheritDoc
     */
    public function setFields(array $fields)
    {
        return $this->setData(self::FIELDS, $fields);
    }

    /**
     * @inheritDoc
     */
    public function getFields()
    {
        return $this->_getData(self::FIELDS);
    }
}
