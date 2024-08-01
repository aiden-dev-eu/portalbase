<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

interface CountryRepositoryInterface
{
    /**
     * Retrieves country name for country id by current locale.
     *
     * @param string $countryId
     * @return string Country name, if not found country ID
     */
    public function retrieveCountryName(string $countryId = ''): string;

    /**
     * Returns country ids for which the country name (partially) matches the country name that is requested.
     *
     * @param string $countryName (partial) countryName
     * @return string[] (partially) matching id's
     */
    public function retrieveMatchingCountryIds(string $countryName): array;
}
