<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Helper;

use Magento\Framework\Api\CustomAttributesDataInterface;
use Magento\Framework\App\Helper\AbstractHelper;

/**
 * Class with helper function for data manipulation
 * Should only contain self containing functions and no dependencies!
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */
class Data extends AbstractHelper
{
    private const ENTRY = 'entry';
    private const MAP = 'map';
    public const KEY = 'key';
    private const VALUE = 'value';

    /**
     * Get array from array, empty array if key doesn't exist.
     *
     * @deprecated
     * @param array $data
     * @param $name
     * @return array
     */
    public function getArray(array $data, $name)
    {
        return $this->getValue($data, $name, []);
    }

    /**
     * Get value from array or return value if key doesn't exist.
     *
     * @deprecated
     * @deprecated Should be handled in the local code to reduce dependencies.
     * @param array $data
     * @param mixed $name
     * @param mixed $returnValue
     * @return mixed
     */
    public function getValue(array $data, $name, $returnValue)
    {
        if (array_key_exists($name, $data)) {
            return $data[$name];
        }
        return $returnValue;
    }

    /**
     * Checks if value is empty or null.
     *
     * @deprecated
     * @param mixed $value
     * @return bool
     */
    public function isEmpty($value = '')
    {
        if ($value == null) {
            return true;
        }
        return (strlen(trim($value)) === 0);
    }

    /**
     * Searches non-assoc array for item.
     *
     * @deprecated
     * @param array $items Array to search
     * @param string $value value to search
     * @param string $identifier key to search
     * @return array Found item
     */
    public function getArrayItem(array $items, string $value, string $identifier)
    {
        foreach ($items as $item) {
            if ($value === Data::getField($item, $identifier)) {
                return $item;
            }
        }
        return [];
    }

    /**
     * Get field from array of empty string if key doesn't exist.
     *
     * @deprecated
     * @param array $data
     * @param string $name
     * @return string
     */
    public function getField(array $data, string $name)
    {
        return $this->getValue($data, $name, '');
    }

    /**
     * Safely gets attribute value.
     *
     * @param CustomAttributesDataInterface $object
     * @param string $name
     * @param mixed $returnValue
     * @return mixed
     */
    public function getCustomProductAttribute(CustomAttributesDataInterface $object, string $name, mixed $returnValue): mixed
    {
        $attribute = $object->getCustomAttribute($name);
        return ($attribute ? $attribute->getValue() : $returnValue);
    }

    /**
     * Converts string array to int array.
     *
     * @param string[] $strArray
     * @return int[]
     */
    public function stringArrayToIntArray(array $strArray)
    {
        $intArray = [];
        foreach ($strArray as $strItem) {
            $intArray[] = (int) $strItem;
        }
        return $intArray;
    }

    /**
     * Converts query result to valid values array.
     *
     * @param array $records Query result
     * @return array Associative array in valid values structure
     */
    public function toValidValuesArray(array $records)
    {
        $converted = [];
        foreach ($records as $record) {
            $entry = $record[self::MAP][self::ENTRY];
            $converted += [$entry[0][self::VALUE] => $entry[1][self::VALUE]];
        }
        return $converted;
    }
}
