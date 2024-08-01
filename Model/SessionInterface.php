<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

interface SessionInterface
{
    public const KEY_SBO_CONNECTOR_UPGRADE = 'sbo_connector_upgrade';
    public const KEY_CONTACTS = 'contacts';
    public const KEY_RETURN_REQUESTS_PARAMS = 'return_requests_params';
    /**
     * Gets value from session.
     *
     * @param string $key
     * @param mixed $fallback
     * @return mixed
     */
    public function getSessionValue($key, $fallback);

    /**
     * Sets value on session.
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function setSessionValue($key, $value);
}
