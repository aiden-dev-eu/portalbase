<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\ViewModel\Data;

use Aiden\PortalBase\Model\Data\PortalDataObject;

class PageConfig extends PortalDataObject implements PageConfigInterface
{

    /**
     * @inheritDoc
     */
    public function setRows(int $rows)
    {
        return $this->setData(self::ROWS, $rows);
    }

    /**
     * @inheritDoc
     */
    public function getRows()
    {
        return $this->_getData(self::ROWS);
    }

    /**
     * @inheritDoc
     */
    public function setRowOptions(array $rowOptions)
    {
        return $this->setData(self::ROW_OPTIONS, $rowOptions);
    }

    /**
     * @inheritDoc
     */
    public function getRowOptions()
    {
        return $this->_getData(self::ROW_OPTIONS);
    }

    /**
     * @inheritDoc
     */
    public function setOrderByField(string $orderByField)
    {
        return $this->setData(self::ORDER_BY_FIELD, $orderByField);
    }

    /**
     * @inheritDoc
     */
    public function getOrderByField()
    {
        return $this->_getData(self::ORDER_BY_FIELD);
    }

    /**
     * @inheritDoc
     */
    public function setOrderByDirection(string $direction)
    {
        return $this->setData(self::ORDER_BY_DIRECTION, $direction);
    }

    /**
     * @inheritDoc
     */
    public function getOrderByDirection()
    {
        return $this->_getData(self::ORDER_BY_DIRECTION);
    }

    /**
     * @inheritDoc
     */
    public function setFromDate(string $fromDate)
    {
        return $this->setData(self::FROM_DATE, $fromDate);
    }

    /**
     * @inheritDoc
     */
    public function getFromDate()
    {
        return $this->_getData(self::FROM_DATE);
    }

    /**
     * @inheritDoc
     */
    public function setToDate(string $toDate)
    {
        return $this->setData(self::TO_DATE, $toDate);
    }

    /**
     * @inheritDoc
     */
    public function getToDate()
    {
        return $this->_getData(self::TO_DATE);
    }

    /**
     * @inheritDoc
     */
    public function setTaxDisplayType(int $taxDisplayType)
    {
        return $this->setData(self::TAX_DISPLAY_TYPE, $taxDisplayType);
    }

    /**
     * @inheritDoc
     */
    public function getTaxDisplayType()
    {
        return $this->_getData(self::TAX_DISPLAY_TYPE);
    }

    /**
     * @inheritDoc
     */
    public function setTaxDisplayShipping(int $taxDisplayShipping)
    {
        return $this->setData(self::TAX_DISPLAY_SHIPPING, $taxDisplayShipping);
    }

    /**
     * @inheritDoc
     */
    public function getTaxDisplayShipping()
    {
        return $this->_getData(self::TAX_DISPLAY_SHIPPING);
    }

    /**
     * @inheritDoc
     */
    public function setInfoBlock(string $infoBlock)
    {
        return $this->setData(self::INFO_BLOCK, $infoBlock);
    }

    /**
     * @inheritDoc
     */
    public function getInfoBlock()
    {
        return $this->_getData(self::INFO_BLOCK);
    }

    /**
     * @inheritDoc
     */
    public function setShowInfoBlock(bool $showInfoBlock)
    {
        return $this->setData(self::SHOW_INFO_BLOCK, $showInfoBlock);
    }

    /**
     * @inheritDoc
     */
    public function isShowInfoBlock()
    {
        return $this->_getData(self::SHOW_INFO_BLOCK);
    }

    /**
     * @inheritDoc
     */
    public function setCsvFileName(string $fileName)
    {
        return $this->setData(self::CSV_FILE_NAME, $fileName);
    }

    /**
     * @inheritDoc
     */
    public function getCsvFileName()
    {
        return $this->_getData(self::CSV_FILE_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setXmlFileName(string $fileName)
    {
        return $this->setData(self::XML_FILE_NAME, $fileName);
    }

    /**
     * @inheritDoc
     */
    public function getXmlFileName()
    {
        return $this->_getData(self::XML_FILE_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setDocumentId(int $documentId)
    {
        return $this->setData(self::DOCUMENT_ID, $documentId);
    }

    /**
     * @inheritDoc
     */
    public function getDocumentId()
    {
        return $this->_getData(self::DOCUMENT_ID);
    }
}
