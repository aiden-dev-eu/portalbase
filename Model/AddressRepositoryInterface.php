<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Customer\Api\Data\AddressInterface;
use Magento\Framework\Exception\LocalizedException;
use Magento\Framework\Exception\NoSuchEntityException;

interface AddressRepositoryInterface
{
    /**
     * Get customer addresses collection.
     *
     * Filters collection by customer id
     *
     * @param string[] $addressCodes
     * @param string $searchTerm
     * @return \Magento\Customer\Api\Data\AddressInterface[]
     * @throws NoSuchEntityException|LocalizedException
     */
    public function getAddressCollection(array $addressCodes, string $searchTerm = ''): array;

    /**
     * Retrieves single address based on current cardcode and addresscode param
     *
     * @param string $addresscode
     * @return \Magento\Customer\Api\Data\AddressInterface|null
     * @throws LocalizedException
     * @throws NoSuchEntityException
     */
    public function getAddressByAddressCode(string $addresscode): ?AddressInterface;
}
