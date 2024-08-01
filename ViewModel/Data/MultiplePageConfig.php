<?php

namespace Aiden\PortalBase\ViewModel\Data;

use Aiden\PortalBase\Model\Data\PortalDataObject;

class MultiplePageConfig extends PortalDataObject implements MultiplePageConfigInterface
{
    /**
     * @inheritDoc
     */
    public function setMainConfig(PageConfigInterface $mainConfig)
    {
        return $this->setData(self::MAIN, $mainConfig);
    }

    /**
     * @inheritDoc
     */
    public function getMainConfig()
    {
        return $this->_getData(self::MAIN);
    }

    /**
     * @inheritDoc
     */
    public function setDetailsConfig(PageConfigInterface $detailsConfig)
    {
        return $this->setData(self::DETAILS, $detailsConfig);
    }

    /**
     * @inheritDoc
     */
    public function getDetailsConfig()
    {
        return $this->_getData(self::DETAILS);
    }
}
