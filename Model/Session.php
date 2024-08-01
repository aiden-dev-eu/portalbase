<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Helper\Data;
use Magento\Customer\Model\Session as CustSession;
use Magento\Framework\Serialize\SerializerInterface;

/**
 * Model class with extended functionality for the session.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2022.07.07.0
 */
class Session implements SessionInterface
{
    private const SESSION_KEY = 'portal_session';

    /**
     * @var Data
     */
    private Data $data;
    /**
     * @var CustSession
     */
    private CustSession $session;
    /**
     * @var SerializerInterface
     */
    private SerializerInterface $serializer;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * @param Data $data
     * @param CustSession $session
     * @param SerializerInterface $serializer
     * @param LoggingInterface $logging
     */
    public function __construct(
        Data $data,
        CustSession $session,
        SerializerInterface $serializer,
        LoggingInterface $logging
    ) {
        $this->data = $data;
        $this->session = $session;
        $this->serializer = $serializer;
        $this->logging = $logging;
    }

    /**
     * @inheritDoc
     */
    public function getSessionValue($key, $fallback)
    {
        $data = $this->getPortalSession();
        return $this->data->getValue($data, $key, $fallback);
    }

    /**
     * @inheritDoc
     */
    public function setSessionValue($key, $value)
    {
        $data = $this->getPortalSession();
        $data[$key] = $value;
        $this->setPortalSession($data);
    }

    /**
     * Gets specific portal data from customer session.
     *
     * @return array
     */
    private function getPortalSession()
    {
        $data = $this->session->getData(self::SESSION_KEY);
        if ($data == null) {
            return [];
        }
        return $this->serializer->unserialize($data);
    }

    /**
     * Sets specific portal data on customer session.
     *
     * @param array $sessionData
     * @return void
     */
    private function setPortalSession(array $sessionData)
    {
        $this->session->setData(self::SESSION_KEY, $this->serializer->serialize($sessionData));
    }
}
