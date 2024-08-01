<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\FileExportRequestInterface;
use Magento\Framework\DataObject;

/**
 * Api Data model for requesting data exports as Excel XML or CSV file.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.05.0
 */
class FileExportRequest extends DataObject implements FileExportRequestInterface
{
    /**
     * @inheritDoc
     */
    public function setFileName(string $fileName)
    {
        return $this->setData(self::FILE_NAME, $fileName);
    }

    /**
     * @inheritDoc
     */
    public function getFileName()
    {
        return $this->_getData(self::FILE_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setExportData(array $data)
    {
        return $this->setData(self::DATA, $data);
    }

    /**
     * @inheritDoc
     */
    public function getExportData()
    {
        return $this->_getData(self::DATA);
    }
}
