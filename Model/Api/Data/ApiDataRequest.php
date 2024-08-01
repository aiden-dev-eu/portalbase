<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Aiden\PortalBase\Api\Data\ApiDataRequestInterface;
use Aiden\PortalBase\Api\Data\DataFilterInterface;
use Aiden\PortalBase\Api\Data\DataFilterInterfaceFactory;
use Aiden\PortalBase\Api\Data\DataOrderInterface;
use Aiden\PortalBase\Api\Data\DataOrderInterfaceFactory;
use Aiden\PortalBase\Model\Data\PortalDataObject;

/**
 * Object for data request on frontend API
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.19.0
 */
class ApiDataRequest extends PortalDataObject implements ApiDataRequestInterface
{
    /**
     * @var DataOrderInterfaceFactory
     */
    private DataOrderInterfaceFactory $dataOrderFactory;
    /**
     * @var DataFilterInterfaceFactory
     */
    private DataFilterInterfaceFactory $dataFilterFactory;

    /**
     * @param DataFilterInterfaceFactory $dataFilterFactory
     * @param DataOrderInterfaceFactory $dataOrderFactory
     * @param array $data
     */
    public function __construct(
        DataFilterInterfaceFactory $dataFilterFactory,
        DataOrderInterfaceFactory $dataOrderFactory,
        array $data = []
    ) {
        parent::__construct($data);
        $this->dataFilterFactory = $dataFilterFactory;
        $this->dataOrderFactory = $dataOrderFactory;
    }

    /**
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
    public function setOrderByFields(array $orderByField)
    {
        return $this->setData(self::ORDER_BY_FIELDS, $orderByField);
    }

    /**
     * @inheritDoc
     */
    public function getOrderByFields()
    {
        return $this->_getData(self::ORDER_BY_FIELDS);
    }

    /**
     * @inheritDoc
     */
    public function setSearchTerm(string $searchTerm)
    {
        return $this->setData(self::SEARCH_TERM, $searchTerm);
    }

    /**
     * @inheritDoc
     */
    public function getSearchTerm()
    {
        return $this->_getData(self::SEARCH_TERM);
    }

    /**
     * @inheritDoc
     */
    public function setFilters(array $filters)
    {
        return $this->setData(self::FILTERS, $filters);
    }

    /**
     * @inheritDoc
     */
    public function getFilters()
    {
        return $this->_getData(self::FILTERS);
    }

    /**
     * @inheritDoc
     */
    public function setOffset(int $offset)
    {
        return $this->setData(self::OFFSET, $offset);
    }

    /**
     * @inheritDoc
     */
    public function getOffset()
    {
        return $this->_getData(self::OFFSET);
    }

    /**
     * @inheritDoc
     */
    public function setTaskCode(string $taskCode): ApiDataRequestInterface
    {
        return $this->setData(self::TASK_CODE, $taskCode);
    }

    /**
     * @inheritDoc
     */
    public function setCardCode(?string $cardCode): ApiDataRequestInterface
    {
        return $this->setData(self::CARD_CODE, $cardCode);
    }

    /**
     * @inheritDoc
     */
    public function setContactCode(int $contactCode): ApiDataRequestInterface
    {
        return $this->setData(self::CONTACT_CODE, $contactCode);
    }

    /**
     * @inheritDoc
     */
    public function setCustomerId(?int $customerId): ApiDataRequestInterface
    {
        return $this->setData(self::CUSTOMER_ID, $customerId);
    }

    /**
     * @inheritDoc
     */
    public function setDocEntry(int $docEntry): ApiDataRequestInterface
    {
        return $this->setData(self::DOC_ENTRY, $docEntry);
    }

    /**
     * @inheritDoc
     */
    public function setLanguageCode(string $languageCode): ApiDataRequestInterface
    {
        return $this->setData(self::LANGUAGE_CODE, $languageCode);
    }

    /**
     * @inheritDoc
     */
    public function addFilter(string $field, string $value, string $condition)
    {
        if (strlen($field) > 0 && strlen($value) > 0 && strlen($condition) > 0) {
            /** @var DataFilterInterface $filter */
            $filter = $this->dataFilterFactory->create();
            $filter->setFieldName($field)->setValue($value)->setCondition($condition);
            $filters = $this->getFilters();
            $filters[] = $filter;
            return $this->setFilters($filters);
        }
        return $this;
    }

    /**
     * @inheritDoc
     */
    public function addOrderByField(string $field, string $direction)
    {
//        $this->setData(self::FILTERS, []);
        if (strlen($field) > 0 && strlen($direction) > 0) {
            /** @var DataOrderInterface $dataOrder */
            $dataOrder = $this->dataOrderFactory->create();
            $dataOrder->setFieldName($field)->setDirection($direction);
            $dataOrders = $this->getOrderByFields();
            $dataOrders[] = $dataOrder;
            return $this->setOrderByFields($dataOrders);
        }
        return $this;
    }
}
