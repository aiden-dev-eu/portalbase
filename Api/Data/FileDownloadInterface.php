<?php

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of the Api answer on a file download request.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.26.0
 *
 */
interface FileDownloadInterface
{
    public const RETURN_CODE = 'returnCode';
    public const ERROR_DESCRIPTION = 'errorDescription';
    public const FILE_NAME = 'fileName';
    public const FILE_EXTENSION = 'fileExtension';
    public const FILE_CONTENT = 'fileContent';
    public const CONTENT_TYPE = 'contentType';

    /**
     * Sets ReturnCde
     *
     * @param int $returnCode
     * @return $this
     */
    public function setReturnCode(int $returnCode);

    /**
     * Gets ReturnCode
     *
     * @return int
     */
    public function getReturnCode();

    /**
     * Sets ErrorDescription
     *
     * @param string $errorDescription
     * @return $this
     */
    public function setErrorDescription(string $errorDescription);

    /**
     * Gets ErrorDescription
     *
     * @return string
     */
    public function getErrorDescription();

    /**
     * Sets FileName
     *
     * @param string $fileName
     * @return $this
     */
    public function setFileName(string $fileName);

    /**
     * Gets FileName
     *
     * @return string
     */
    public function getFileName();

    /**
     * Sets FileExtension
     *
     * @param string $fileExtension
     * @return $this
     */
    public function setFileExtension(string $fileExtension);

    /**
     * Gets FileExtension
     *
     * @return string
     */
    public function getFileExtension();

    /**
     * Sets ContentType
     *
     * @param string $fileContent
     * @return $this
     */
    public function setFileContent(string $fileContent);

    /**
     * Gets ContentType
     *
     * @return string
     */
    public function getFileContent();

    /**
     * Set content type
     *
     * @param string $contentType
     * @return $this
     */
    public function setContentType(string $contentType);

    /**
     * Get content type
     *
     * @return string
     */
    public function getContentType();
}
