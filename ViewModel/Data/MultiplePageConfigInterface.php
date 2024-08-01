<?php

namespace Aiden\PortalBase\ViewModel\Data;

/**
 * Interface representation of multiple page configurations settings so these are properly converted to JSON.
 * Can be extended with other configuration (edit etc.)
 *
 * Copyright © Aiden. All rights reserved.
 * @author thomas.janssen@aiden.eu
 * @version 2023.11.03.0
 *
 */
interface MultiplePageConfigInterface
{
    public const MAIN = 'main';
    public const DETAILS = 'details';

    /**
     * Set main config
     *
     * @param PageConfigInterface $mainConfig
     * @return $this
     */
    public function setMainConfig(PageConfigInterface $mainConfig);

    /**
     * Get main config
     *
     * @return PageConfigInterface
     */
    public function getMainConfig();

    /**
     * Set details config
     *
     * @param PageConfigInterface $detailsConfig
     * @return $this
     */
    public function setDetailsConfig(PageConfigInterface $detailsConfig);

    /**
     * Get details config
     *
     * @return PageConfigInterface
     */
    public function getDetailsConfig();
}
