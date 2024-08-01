<?php

namespace Aiden\PortalBase\Convert;

use Magento\Framework\Convert\Excel;
use Magento\Framework\Filesystem\File\WriteInterface;

/**
 * Extension on {@see \Magento\Framework\Convert\Excel} class so external data can be converted to Excel XML.
 * Has to be overridden because of protected functions in parent. Preference for this class in di.xml
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.01.0
 */
class ExcelXml extends Excel
{
    /**
     * @var array
     */
    private $dataRows = [];

    /**
     * Set data rows.
     *
     * @param array $rows
     * @return array
     */
    public function setDataRows(array $rows)
    {
        return $this->dataRows = $rows;
    }

    /**
     * @inheritDoc
     */
    public function write(WriteInterface $stream, $sheetName = '')
    {
        $stream->write($this->_getXmlHeader($sheetName));
        foreach ($this->dataRows as $dataRow) {
            $stream->write($this->_getXmlRow(array_values($dataRow), false));
        }
        $stream->write($this->_getXmlFooter());
    }
}
