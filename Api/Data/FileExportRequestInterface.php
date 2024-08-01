<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Api Data interface for requesting data exports as Excel XML or CSV file.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.05.0
 */
interface FileExportRequestInterface
{
    public const FILE_NAME = 'filename';
    public const DATA = 'data';

    /**
     * Set file name
     *
     * @param string $fileName
     * @return $this
     */
    public function setFileName(string $fileName);

    /**
     * Get file name
     *
     * @return string
     */
    public function getFileName();

    /**
     * Set data
     *
     * @param mixed $data
     * @return $this
     */
    public function setExportData(array $data);

    /**
     * Get data
     *
     * @return mixed
     */
    public function getExportData();
}
