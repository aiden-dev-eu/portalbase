<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

interface CustomerRepositoryInterface
{
    public const ATTRIBUTE_AUTH_ID = 'authid';
    public const ATTRIBUTE_EDIT_AUTH_ID = 'edit_authid';
    public const ATTRIBUTE_CARDCODE = 'cardcode';
    public const ATTRIBUTE_CONTACTCODE = 'contactcode';

    /**
     * Get CardCode of currently logged in customer.
     *
     * @return String
     */
    public function getCardCode();

    /**
     * Get ContactCode of currently logged in customer.
     *
     * @return int
     */
    public function getContactCode();

    /**
     * Get Id of currently logged in customer.
     *
     * @return int
     */
    public function getId();

    /**
     * Get if there is a logged in customer at this moment.
     *
     * @return bool
     */
    public function isLoggedIn();

    /**
     * Retrieves Customer Collection by custom attribute value.
     *
     * @deprecated Replace calls with { @see \Magento\Customer\Api\CustomerRepositoryInterface::getList() }
     * @param array $codeValueMap
     * @return \Magento\Customer\Model\ResourceModel\Customer\Collection
     * @throws \Magento\Framework\Exception\LocalizedException
     */
    public function getByCustomAttribute(array $codeValueMap);

    /**
     * Logs out the current customer.
     *
     * @return void
     */
    public function logout();

    /**
     * Get Authorization id of currently logged in customer.
     *
     * @return int
     */
    public function getAuthId();

    /**
     * Returns if customer auth id is part of allowed profiles.
     *
     * @param string[] $allowedProfiles
     * @param int|null $authId optional authId that is not from logged-in user
     * @return bool
     */
    public function isAuthorized(array $allowedProfiles, ?int $authId = null): bool;

    /**
     * Returns if this customer may edit authorization profiles.
     *
     * @return bool
     */
    public function canEditAuthProfiles(): bool;

}
