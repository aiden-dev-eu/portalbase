<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Data;

/**
 * Interface representation of DataResponse From the SboWebConnector.
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.25.0
 */
interface DataResponseInterface
{
    public const RETURN_CODE = 'returnCode';
    public const ERROR_DESCRIPTION = 'errorDescription';
    public const RECORD_COUNT = 'recordCount';
    public const RECORDS = 'records';

    /**
     * Gets ReturnCode
     *
     * @return int
     */
    public function getReturnCode();

    /**
     * Gets ErrorDescription.
     *
     * @return string
     */
    public function getErrorDescription();

    /**
     * Gets RecordCount.
     *
     * @return int
     */
    public function getRecordCount();

    /**
     * Gets Results.
     *
     * @return array;
     */
    public function getResults();
}
