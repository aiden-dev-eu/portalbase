<?php

declare(strict_types=1);

namespace Aiden\PortalBase\Model\Data;

/**
 * Interface contain base product data needed to complement SAP item data.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2024.04.29.0
 */
interface BaseProductDataInterface
{
    public const IMAGE_URL = 'image_url';
    public const PRICE = 'price';
    public const NAME = 'name';
    public const URL = 'url';

    /**
     * @param string $imageUrl
     * @return BaseProductDataInterface
     */
    public function setImageUrl(string $imageUrl): BaseProductDataInterface;

    /**
     * @return string
     */
    public function getImageUrl(): string;

    /**
     * @param float $price
     * @return BaseProductDataInterface
     */
    public function setPrice(float $price): BaseProductDataInterface;

    /**
     * @return float
     */
    public function getPrice(): float;

    /**
     * @param string $name
     * @return BaseProductDataInterface
     */
    public function setName(string $name): BaseProductDataInterface;

    /**
     * @return string
     */
    public function getName(): string;

    /**
     * @param string $url
     * @return BaseProductDataInterface
     */
    public function setUrl(string $url): BaseProductDataInterface;

    /**
     * @return string
     */
    public function getUrl(): string;
}
