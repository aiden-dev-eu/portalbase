<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Customer\Api\AddressRepositoryInterface as MagentoAddressRepositoryInterface;
use Aiden\PortalOrderLists\Api\Data\OrderListInterface;
use Aiden\PortalOrderLists\Api\OrderListRepositoryInterface;
use Magento\Customer\Api\Data\AddressInterface;
use Magento\Framework\Api\FilterBuilder;
use Magento\Framework\Api\SearchCriteriaBuilder;
use Magento\Framework\Api\SortOrder;
use Magento\Framework\Api\SortOrderBuilder;
use Magento\Framework\Exception\NoSuchEntityException;

class AddressRepository implements AddressRepositoryInterface
{
    /**
     * @var SearchCriteriaBuilder
     */
    private SearchCriteriaBuilder $searchCriteriaBuilder;
    /**
     * @var SortOrderBuilder
     */
    private SortOrderBuilder $sortOrderBuilder;
    /**
     * @var FilterBuilder
     */
    private FilterBuilder $filterBuilder;
    /**
     * @var MagentoAddressRepositoryInterface
     */
    private MagentoAddressRepositoryInterface $addressRepository;
    /**
     * @var CustomerRepositoryInterface
     */
    private CustomerRepositoryInterface $customer;
    /**
     * @var CountryRepositoryInterface
     */
    private CountryRepositoryInterface $countryRepository;

    /**
     * @param SearchCriteriaBuilder $searchCriteriaBuilder
     * @param SortOrderBuilder $sortOrderBuilder
     * @param FilterBuilder $filterBuilder
     * @param MagentoAddressRepositoryInterface $addressRepository
     * @param CustomerRepositoryInterface $customer
     * @param CountryRepositoryInterface $countryRepository
     */
    public function __construct(
        SearchCriteriaBuilder $searchCriteriaBuilder,
        SortOrderBuilder $sortOrderBuilder,
        FilterBuilder $filterBuilder,
        MagentoAddressRepositoryInterface $addressRepository,
        CustomerRepositoryInterface $customer,
        CountryRepositoryInterface $countryRepository
    ) {
        $this->addressRepository = $addressRepository;
        $this->searchCriteriaBuilder = $searchCriteriaBuilder;
        $this->sortOrderBuilder = $sortOrderBuilder;
        $this->filterBuilder = $filterBuilder;
        $this->customer = $customer;
        $this->countryRepository = $countryRepository;
    }
    /**
     * @inheritDoc
     */
    public function getAddressCollection(array $addressCodes, string $searchTerm = ''): array
    {
        $sortOrders[] = $this->sortOrderBuilder
            ->setField('entity_id')
            ->setDirection(SortOrder::SORT_DESC)
            ->create();
        $sortOrders[] = $this->sortOrderBuilder
            ->setField(OrderListRepositoryInterface::ADDRESS_NAME)
            ->setDirection(SortOrder::SORT_ASC)
            ->create();
        $searchCriteriaBuilder = $this->searchCriteriaBuilder->setSortOrders($sortOrders)
            ->addFilter('parent_id', $this->customer->getId())
            ->addFilter('addresstype', 'S');

        if (!empty($addressCodes)) {
            $searchCriteriaBuilder->addFilter(OrderListRepositoryInterface::ADDRESS_CODE, $addressCodes, 'in');
        }

        if (strlen($searchTerm) > 0) {
            $matchingCountryIds = $this->countryRepository->retrieveMatchingCountryIds($searchTerm);
            $searchTerm = '%' . $searchTerm . '%';
            $filters = [
                $this->filterBuilder->setField(OrderListRepositoryInterface::ADDRESS_NAME)
                    ->setValue($searchTerm)
                    ->setConditionType('like')
                    ->create(),
                $this->filterBuilder->setField(AddressInterface::CITY)
                    ->setValue($searchTerm)
                    ->setConditionType('like')
                    ->create(),
                $this->filterBuilder->setField(AddressInterface::STREET)
                    ->setValue($searchTerm)
                    ->setConditionType('like')
                    ->create(),
                $this->filterBuilder->setField(AddressInterface::POSTCODE)
                    ->setValue($searchTerm)
                    ->setConditionType('like')
                    ->create(),
                $this->filterBuilder->setField(AddressInterface::CITY)
                    ->setValue($searchTerm)
                    ->setConditionType('like')
                    ->create()
            ];
            if (!empty($matchingCountryIds)) {
                $filters[] = $this->filterBuilder->setField(AddressInterface::COUNTRY_ID)
                    ->setValue($matchingCountryIds)
                    ->setConditionType('in')
                    ->create();
            }

            $this->searchCriteriaBuilder->addFilters($filters);
        }

        $addresses = $this->addressRepository->getList($searchCriteriaBuilder->create());

        return $addresses->getItems();
    }

    /**
     * @inheritDoc
     */
    public function getAddressByAddressCode(string $addresscode): ?AddressInterface
    {
        $customerId = $this->customer->getId();
        if ($customerId === null) {
            return null;
        }

        $addresses = $this->addressRepository->getList(
            $this->searchCriteriaBuilder
                ->addFilter('parent_id', $customerId)
                ->addFilter(OrderListInterface::ADDRESSCODE, $addresscode)
                ->create()
        );

        if ($addresses->getTotalCount() === 0) {
            throw new NoSuchEntityException(
                __('Address with addresscode: "%1" does not exist for customerId: "%2".', $addresscode, $customerId)
            );
        }

        return current($addresses->getItems());
    }
}
