<?php

namespace Aiden\PortalBase\Api\Data;

/**
 * Interface representation of tier_price.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author bas.van.der.louw@aiden.eu
 * @version 2023.11.09.0
 */
interface TierPriceInterface
{
    public const TIER_QTY = 'tier_qty';
    public const TIER_PRICE = 'tier_price';

    /**
     * Set tier qty
     *
     * @param $qty
     * @return TierPriceInterface
     */
    public function setQty($qty): TierPriceInterface;

    /**
     * Get tier qty
     *
     * @return int
     */
    public function getQty(): int;

    /**
     * Set tier price
     *
     * @param $price
     * @return TierPriceInterface
     */
    public function setPrice($price): TierPriceInterface;

    /**
     * Get tier price
     *
     * @return float
     */
    public function getPrice(): float;
}
