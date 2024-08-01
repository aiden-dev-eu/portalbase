<?php

namespace Aiden\PortalBase\ViewModel\Data;

use Magento\Framework\DataObject;

/**
 * Object representation of a row option.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.26.0
 *
 */
class RowOption extends DataObject implements RowOptionInterface
{

    /**
     * @inheritDoc
     */
    public function setValue(int $value)
    {
        return $this->setData(self::VALUE, $value);
    }

    /**
     * @inheritDoc
     */
    public function setLabel(string $label)
    {
        return $this->setData(self::LABEL, $label);
    }
}
