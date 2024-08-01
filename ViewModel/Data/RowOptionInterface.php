<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\ViewModel\Data;

/**
 * Interface representation of a row option.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.26.0
 *
 */
interface RowOptionInterface
{
    public const VALUE = 'value';
    public const LABEL = 'label';

    /**
     * Sets value.
     *
     * @param int $value
     * @return $this
     */
    public function setValue(int $value);

    /**
     * Sets label.
     *
     * @param string $label
     * @return $this
     */
    public function setLabel(string $label);
}
