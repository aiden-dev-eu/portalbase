<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of an action.
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2022.10.26.0
 *
 */
interface ActionInterface
{
    public const NAME = 'name';
    public const VISIBLE = 'visible';

    /**
     * Sets name.
     *
     * @param string $name
     * @return $this
     */
    public function setName(string $name);

    /**
     * Gets Name.
     *
     * @return string
     */
    public function getName();

    /**
     * Sets visibility.
     *
     * @param bool $visible
     * @return $this
     */
    public function setVisible(bool $visible);

    /**
     * Gets visibility.
     *
     * @return bool
     */
    public function getVisible();
}
