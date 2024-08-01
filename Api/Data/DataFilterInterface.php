<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of DataFilter.
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
interface DataFilterInterface
{
    public const FIELD_NAME = 'fieldName';
    public const VALUE = 'value';
    public const CONDITION = 'condition';

    /**
     * Sets FieldName
     *
     * @param string $fieldName
     * @return $this
     */
    public function setFieldName(string $fieldName);

    /**
     * Gets FieldName
     *
     * @return string
     */
    public function getFieldName();

    /**
     * Sets Value
     *
     * @param string $value
     * @return $this
     */
    public function setValue(string $value);

    /**
     * Gets Value
     *
     * @return string
     */
    public function getValue();

    /**
     * Sets Condition
     *
     * @param string $condition
     * @return $this
     */
    public function setCondition(string $condition);

    /**
     * Gets Condition
     *
     * @return string
     */
    public function getCondition();

    /**
     * Turns object to array.
     *
     * @param mixed[] $keys
     * @return mixed[]
     */
    public function toArray(array $keys = []);

}
