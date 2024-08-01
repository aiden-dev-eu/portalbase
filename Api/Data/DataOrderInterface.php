<?php

declare (strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of DataOrder.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 *
 */
interface DataOrderInterface
{
    public const FIELD_NAME = 'fieldName';
    public const DIRECTION = 'direction';

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
     * Sets Direction
     *
     * @param string $direction
     * @return $this
     */
    public function setDirection(string $direction);

    /**
     * Gets Direction
     *
     * @return string
     */
    public function getDirection();

    /**
     * Turns object to array.
     *
     * @param mixed[] $keys
     * @return mixed[]
     */
    public function toArray(array $keys = []);
}
