<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Export;

use Aiden\PortalBase\Api\Data\FileExportRequestInterface;

/**
 * Api Model to write JSON encoded data into a temporary file with Excel XML or CSV format.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.01.0
 */
interface FileExportInterface
{
    /**
     * Export data as csv file.
     *
     * @param \Aiden\PortalBase\Api\Data\FileExportRequestInterface $request
     * @return string
     */
    public function csv(FileExportRequestInterface $request);

    /**
     * Export data as Excel XML file
     *
     * @param \Aiden\PortalBase\Api\Data\FileExportRequestInterface $request
     * @return string
     */
    public function xml(FileExportRequestInterface $request);
}
