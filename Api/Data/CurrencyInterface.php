<?php

namespace Aiden\PortalBase\Api\Data;

interface CurrencyInterface
{
    public const SINGLE = 'single';
    public const SYMBOL = 'symbol';

    /**
     * Set is single
     *
     * @param bool $single
     * @return $this
     */
    public function setSingle(bool $single);

    /**
     * Get is single
     *
     * @return bool
     */
    public function isSingle();

    /**
     * Set symbol
     *
     * @param string $symbol
     * @return $this
     */
    public function setSymbol(string $symbol);

    /**
     * Get symbol
     *
     * @return string
     */
    public function getSymbol();
}
