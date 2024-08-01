<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Data;

/**
 * Object representation op GenericResponse from SboWebConnector.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 *
 */
interface GenericResponseInterface
{
    public const RETURN_CODE = 'returnCode';
    public const MESSAGE = 'message';
    public const ERROR_DESCRIPTION = 'errorDescription';

    /**
     * Gets returnCode
     *
     * @return int
     */
    public function getReturnCode();

    /**
     * Gets message
     *
     * @return string
     */
    public function getMessage();

    /**
     * Gets errorDescription
     *
     * @return string
     */
    public function getErrorDescription();

    /**
     * Add Data.
     *
     * @param array $data
     * @return $this
     */
    public function addData(array $data);
}
