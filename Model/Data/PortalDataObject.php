<?php

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

/**
 * Extension of {@see DataObject} for portal use because standard {@see DataObject::toArray()} doesn't turn
 * a subarray of objects in to a proper assoc array. And some other extra functionality.
 *
 * @copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.12.0
 */
class PortalDataObject extends DataObject
{
    /**
     * @inheritDoc
     */
    public function toArray(array $keys = [])
    {
        $result = [];
        foreach ($this->getData() as $key => $value) {
            if ($value === null || (!empty($keys) && !in_array($key, $keys))) {
                continue;
            }
            if (is_array($value)) {
                foreach ($value as $item) {
                    $result[$key][] = $this->itemToArray($item, $keys);
                }
                continue;
            }
            $result[$key] = $this->itemToArray($value, $keys);
        }
        return $result;
    }

    /**
     * Returns item consisting of value or {@see PortalDataObject} as an array item.
     *
     * @param mixed $item
     * @param array $keys
     * @return mixed
     */
    private function itemToArray($item, array $keys = [])
    {
        if ($item instanceof DataObject) {
            return $item->toArray($keys);
        }
        return $item;
    }
}
