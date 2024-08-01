<?php

namespace Aiden\PortalBase\Model\Api\Data;

use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\FileDownloadInterface;

class FileDownload extends DataObject implements FileDownloadInterface
{
    /**
     * @inheritDoc
     */
    public function setReturnCode(int $returnCode)
    {
        return $this->setData(self::RETURN_CODE, $returnCode);
    }

    /**
     * @inheritDoc
     */
    public function getReturnCode()
    {
        return $this->_getData(self::RETURN_CODE);
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
        return $this->getData(self::ERROR_DESCRIPTION);
    }

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
        return $this->_getData(self::FILE_NAME) ?? '';
    }

    /**
     * @inheritDoc
     */
    public function setFileExtension(string $fileExtension)
    {
        return $this->setData(self::FILE_EXTENSION, $fileExtension);
    }

    /**
     * @inheritDoc
     */
    public function getFileExtension()
    {
        return $this->_getData(self::FILE_EXTENSION);
    }

    /**
     * @inheritDoc
     */
    public function setFileContent(string $fileContent)
    {
        return $this->setData(self::FILE_CONTENT, $fileContent);
    }

    /**
     * @inheritDoc
     */
    public function getFileContent()
    {
        return $this->_getData(self::FILE_CONTENT);
    }

    /**
     * @inheritDoc
     */
    public function setContentType(string $contentType)
    {
        return $this->setData(self::CONTENT_TYPE, $contentType);
    }

    /**
     * @inheritDoc
     */
    public function getContentType()
    {
        return $this->_getData(self::CONTENT_TYPE);
    }
}
