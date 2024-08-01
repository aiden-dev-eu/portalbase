<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface for data request on frontend API
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
interface ApiDataRequestInterface
{
    public const FROM_DATE = 'fromDate';
    public const TO_DATE = 'toDate';
    public const ROWS = 'rows';
    public const OFFSET = 'offset';
    public const ORDER_BY_FIELDS = 'orderByFields';
    public const SEARCH_TERM = 'searchTerm';
    public const FILTERS = 'filters';
    //No getters for the next fields to stop them from being exposed in the REST API!!
    public const TASK_CODE = 'taskCode';
    public const CARD_CODE = 'cardCode';
    public const CONTACT_CODE = 'contactCode';
    public const CUSTOMER_ID = 'customerId';
    public const DOC_ENTRY = 'docEntry';
    public const LANGUAGE_CODE = 'languageCode';

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
     * @return string|null
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
     * @return string|null
     */
    public function getToDate();

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
     * @return int|null
     */
    public function getRows();

    /**
     * Sets OrderByFields
     *
     * @param \Aiden\PortalBase\Api\Data\DataOrderInterface[] $orderByField
     * @return $this
     */
    public function setOrderByFields(array $orderByField);

    /**
     * Gets OrderByFields
     *
     * @return \Aiden\PortalBase\Api\Data\DataOrderInterface[]|null
     */
    public function getOrderByFields();

    /**
     * Sets SearchTerm
     *
     * @param string $searchTerm
     * @return $this
     */
    public function setSearchTerm(string $searchTerm);

    /**
     * Gets SearchTerm
     *
     * @return string|null
     */
    public function getSearchTerm();

    /**
     * Sets Filters
     *
     * @param \Aiden\PortalBase\Api\Data\DataFilterInterface[] $filters
     * @return $this
     */
    public function setFilters(array $filters);

    /**
     * Gets Filter
     *
     * @return \Aiden\PortalBase\Api\Data\DataFilterInterface[]|null
     */
    public function getFilters();

    /**
     * Set offset
     *
     * @param int $offset
     * @return $this
     */
    public function setOffset(int $offset);

    /**
     * Get offset
     *
     * @return int|null
     */
    public function getOffset();

    /**
     * Sets TaskCode
     * No Getter for this field to hide it from API definition!.
     *
     * @param string $taskCode
     * @return $this
     */
    public function setTaskCode(string $taskCode): ApiDataRequestInterface;

    /**
     * Set CardCode.
     * No Getter for this field to hide it from API definition!.
     *
     * @param null|string $cardCode
     * @return $this
     */
    public function setCardCode(?string $cardCode): ApiDataRequestInterface;

    /**
     * Sets ContactCode
     * No Getter for this field to hide it from API definition!.
     *
     * @param int $contactCode
     * @return $this
     */
    public function setContactCode(int $contactCode): ApiDataRequestInterface;

    /**
     * Sets CustomerId
     * No Getter for this field to hide it from API definition!.
     *
     * @param null|int $customerId
     * @return $this
     */
    public function setCustomerId(?int $customerId): ApiDataRequestInterface;

    /**
     * Sets DocEntry
     * No Getter for this field to hide it from API definition!.
     *
     * @param int $docEntry
     * @return $this
     */
    public function setDocEntry(int $docEntry): ApiDataRequestInterface;

    /**
     * Set language code.
     * No Getter for this field to hide it from API definition!.
     *
     * @param string $languageCode
     * @return $this
     */
    public function setLanguageCode(string $languageCode): ApiDataRequestInterface;

    /**
     * Add a filter.
     *
     * @param string $field
     * @param string $value
     * @param string $condition
     * @return $this
     */
    public function addFilter(string $field, string $value, string $condition);

    /**
     * Add order by field
     *
     * @param string $field
     * @param String $direction
     * @return $this
     */
    public function addOrderByField(string $field, String $direction);

}
