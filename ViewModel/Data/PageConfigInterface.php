<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\ViewModel\Data;

/**
 * Interface representation of page configurations settings.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 *
 */
interface PageConfigInterface
{
    public const ROWS = 'rows';
    public const ROW_OPTIONS = 'rowOptions';
    public const ORDER_BY_FIELD = 'orderByField';
    public const ORDER_BY_DIRECTION = 'orderByDirection';
    public const FROM_DATE = 'fromDate';
    public const TO_DATE = 'toDate';
    public const TAX_DISPLAY_TYPE = 'taxDisplayType';
    public const TAX_DISPLAY_SHIPPING = 'taxDisplayShipping';
    public const INFO_BLOCK = 'infoBlock';
    public const SHOW_INFO_BLOCK = 'showInfoBlock';
    public const CSV_FILE_NAME = 'csv_file_name';
    public const XML_FILE_NAME = 'xml_file_name';
    public const DOCUMENT_ID = 'id';

    /**
     * Sets Rows
     *
     * @param int $rows
     * @return $this
     */
    public function setRows(int $rows);

    /**
     * Gets Rows
     *
     * @return int
     */
    public function getRows();

    /**
     * Sets RowOptions
     *
     * @param \Aiden\PortalBase\ViewModel\Data\RowOptionInterface[] $rowOptions
     * @return $this
     */
    public function setRowOptions(array $rowOptions);

    /**
     * Gets RowOptions
     *
     * @return \Aiden\PortalBase\ViewModel\Data\RowOptionInterface[]
     */
    public function getRowOptions();

    /**
     * Sets OrderByField
     *
     * @param string $orderByField
     * @return $this
     */
    public function setOrderByField(string $orderByField);

    /**
     * Gets OrderByField
     *
     * @return string
     */
    public function getOrderByField();

    /**
     * Sets OrderByDirection
     *
     * @param string $direction
     */
    public function setOrderByDirection(string $direction);

    /**
     * Gets OrderByDirection
     *
     * @return string
     */
    public function getOrderByDirection();

    /**
     * Sets FromDate
     *
     * @param string $fromDate
     * @return $this
     */
    public function setFromDate(string $fromDate);

    /**
     * Gets FromDate
     *
     * @return string
     */
    public function getFromDate();

    /**
     * Sets ToDate
     *
     * @param string $toDate
     * @return $this
     */
    public function setToDate(string $toDate);

    /**
     * Gets ToDate
     *
     * @return string
     */
    public function getToDate();

    /**
     * Sets TaxDisplayType
     *
     * @param int $taxDisplayType
     * @return $this
     */
    public function setTaxDisplayType(int $taxDisplayType);

    /**
     * Gets TaxDisplayType
     *
     * @return int
     */
    public function getTaxDisplayType();

    /**
     * Sets TaxDisplayShipping
     *
     * @param int $taxDisplayShipping
     * @return $this
     */
    public function setTaxDisplayShipping(int $taxDisplayShipping);

    /**
     * Gets TaxDisplayShipping
     *
     * @return int
     */
    public function getTaxDisplayShipping();

    /**
     * Sets InfoBlock
     *
     * @param string $infoBlock
     * @return $this
     */
    public function setInfoBlock(string $infoBlock);

    /**
     * Gets InfoBlock
     *
     * @return string
     */
    public function getInfoBlock();

    /**
     * Sets ShowInfoBlock
     *
     * @param bool  $showInfoBlock
     * @return $this
     */
    public function setShowInfoBlock(bool $showInfoBlock);

    /**
     * Gets ShowInfoBlock
     *
     * @return bool
     */
    public function isShowInfoBlock();

    /**
     * Sets CSV file name
     *
     * @param string $fileName
     * @return $this
     */
    public function setCsvFileName(string $fileName);

    /**
     * Get CSV file name
     *
     * @return string
     */
    public function getCsvFileName();

    /**
     * Set XML file name
     *
     * @param string $fileName
     * @return $this
     */
    public function setXmlFileName(string $fileName);

    /**
     * Get Xml file name
     *
     * @return string
     */
    public function getXmlFileName();

    /**
     * Set document id
     *
     * @param int $documentId
     * @return $this
     */
    public function setDocumentId(int $documentId);

    /**
     * Get document id
     *
     * @return int
     */
    public function getDocumentId();

    /**
     * Converts this object to a JSON string
     *
     * @param array $keys
     * @return string
     */
    public function toJson(array $keys = []);

    /**
     * Overwrite data in the object.
     *
     * The $key parameter can be string or array.
     * If $key is string, the attribute value will be overwritten by $value
     *
     * If $key is an array, it will overwrite all the data in the object.
     *
     * @param string|mixed $key
     * @param mixed $value
     * @return $this
     */
    public function setData($key, $value = null);
}
