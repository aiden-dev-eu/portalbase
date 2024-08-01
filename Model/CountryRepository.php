<?php
declare(strict_types = 1);
namespace Aiden\PortalBase\Model;

use Magento\Directory\Api\CountryInformationAcquirerInterface;
use Magento\Framework\Exception\NoSuchEntityException;

class CountryRepository implements CountryRepositoryInterface
{
    /**
     * @var CountryInformationAcquirerInterface
     */
    private CountryInformationAcquirerInterface $countryInformation;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * @param CountryInformationAcquirerInterface $countryInformation
     * @param LoggingInterface $logging
     */
    public function __construct(
        CountryInformationAcquirerInterface $countryInformation,
        LoggingInterface $logging
    ) {
        $this->countryInformation = $countryInformation;
        $this->logging = $logging;
    }
    /**
     * @inheritDoc
     */
    public function retrieveCountryName(string $countryId = ''): string
    {
        try {
            return $this->countryInformation->getCountryInfo($countryId)->getFullNameLocale();
        } catch (NoSuchEntityException $e) {
            $this->logging->error("No country name found for country id: " . $countryId);
            return $countryId;
        }
    }

    /**
     * @inheritDoc
     */
    public function retrieveMatchingCountryIds(string $countryName): array
    {
        /** @var string[] $possibleMatches */
        $possibleMatches = [];
        foreach ($this->countryInformation->getCountriesInfo() as $country) {
            $name = $country->getFullNameLocale() ?? $country->getFullNameEnglish();
            if ($name == null) {
                continue;
            }
            if (str_contains(strtolower($name), strtolower($countryName))) {
                $possibleMatches[] = $country->getId();
            }
        }
        return $possibleMatches;
    }
}
