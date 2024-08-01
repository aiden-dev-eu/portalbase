<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

/**
 * Model class representing Data Response from SboWebConnector.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.25.0
 */
class DataResponse extends DataObject implements DataResponseInterface
{
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
    public function getErrorDescription()
    {
        return $this->_getData(self::ERROR_DESCRIPTION);
    }

    /**
     * @inheritDoc
     */
    public function getRecordCount()
    {
        return $this->_getData(self::RECORD_COUNT);
    }

    /**
     * @inheritDoc
     */
    public function getResults()
    {
        return $this->_getData(self::RECORDS) ?? [];
    }
}
