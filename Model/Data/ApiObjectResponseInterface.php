<?php

namespace Aiden\PortalBase\Model\Data;

/**
 * Interface representation of a response from the SboWebConnector when processing a SBO Api Object.
 *
 * Copyright © Aiden. All rights reserved.
 * www.aiden.eu
 *
 * @author thomas.janssen@aiden.eu
 * @version 2023.05.11.0
 */
interface ApiObjectResponseInterface
{
    public const OBJECT_NAME = 'objectName';
    public const ADDED = 'added';
    public const UPDATED = 'updated';
    public const DELETED = 'deleted';
    public const ERROR_DESCRIPTION = 'errordescription';
    public const FIELDS = 'fields';

    /**
     * Parses and converts array with data into this object.
     *
     * @param array $data
     * @return ApiObjectResponseInterface
     */
    public function parseData(array $data): ApiObjectResponseInterface;
    /**
     * Set Objectname
     *
     * @param string $objectName
     * @return $this
     */
    public function setObjectName(string $objectName);

    /**
     * Get Objectname
     *
     * @return string
     */
    public function getObjectName();

    /**
     * Set added
     *
     * @param bool $added
     * @return $this
     */
    public function setAdded(bool $added);

    /**
     * Get is added
     *
     * @return bool
     */
    public function isAdded();

    /**
     * Set updated
     *
     * @param bool $updated
     * @return $this
     */
    public function setUpdated(bool $updated);

    /**
     * Get is updated
     *
     * @return bool
     */
    public function isUpdated();

    /**
     * Set deleted
     *
     * @param bool $deleted
     * @return $this
     */
    public function setDeleted(bool $deleted);

    /**
     * Get is deleted
     *
     * @return bool
     */
    public function isDeleted();

    /**
     * Set Error description
     *
     * @param string $errorDescription
     * @return $this
     */
    public function setErrorDescription(string $errorDescription);

    /**
     * Get Error description
     *
     * @return string
     */
    public function getErrorDescription();

    /**
     * Set fields
     *
     * @param string[] $fields
     * @return $this
     */
    public function setFields(array $fields);

    /**
     * Get fields
     *
     * @return string[]
     */
    public function getFields();

    /**
     * Turns this object into array.
     *
     * @return mixed
     */
    public function toArray();
}
