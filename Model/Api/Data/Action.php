<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Data;

use Magento\Framework\DataObject;
use Aiden\PortalBase\Api\Data\ActionInterface;

class Action extends DataObject implements ActionInterface
{
    /**
     * @inheritDoc
     */
    public function setName(string $name)
    {
        return $this->setData(self::NAME, $name);
    }

    /**
     * @inheritDoc
     */
    public function setVisible(bool $visible)
    {
        return $this->setData(self::VISIBLE, $visible);
    }

    /**
     * @inheritDoc
     */
    public function getName()
    {
        return $this->_getData(self::NAME);
    }

    /**
     * @inheritDoc
     */
    public function getVisible()
    {
        return $this->_getData(self::VISIBLE);
    }
}
