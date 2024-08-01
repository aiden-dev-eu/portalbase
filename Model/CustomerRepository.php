<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Aiden\PortalBase\Constants\ConfigConstants;
use Magento\Customer\Model\Context as CustomerContext;
use Magento\Customer\Model\ResourceModel\Customer\CollectionFactory;
use Magento\Framework\App\Http\Context as HttpContext;
use Magento\Store\Model\App\Emulation;
use Serac\ERPConnector\Model\CustomerSession;

/**
 * Model class with extended functionality for the customer.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2021.05.27
 */
class CustomerRepository implements CustomerRepositoryInterface
{
    /**
     * @var CustomerSession
     */
    private CustomerSession $session;
    /**
     * @var HttpContext
     */
    private HttpContext $context;
    /**
     * @var ConfigInterface
     */
    private ConfigInterface $settings;
    /**
     * @var CollectionFactory
     */
    private CollectionFactory $collection;

    /**
     * Customer constructor.
     *
     * @param CustomerSession $session
     * @param HttpContext $httpContext
     * @param ConfigInterface $settings
     * @param CollectionFactory $collection
     */
    public function __construct(
        CustomerSession   $session,
        HttpContext       $httpContext,
        ConfigInterface   $settings,
        CollectionFactory $collection,
    ) {
        $this->session = $session;
        $this->context = $httpContext;
        $this->settings = $settings;
        $this->collection = $collection;
    }

    /**
     * @InheritDoc
     */
    public function getCardCode()
    {
        if ($this->isDummyActive()) {
            return $this->settings->getConfigValue(ConfigConstants::BASE_PATH
                . ConfigConstants::SECTION_DEBUG, 'dummy_customer_cardcode');
        }
        return $this->getCustomerAttribute(self::ATTRIBUTE_CARDCODE);
    }

    /**
     * @InheritDoc
     */
    public function getContactCode()
    {
        if ($this->isDummyActive()) {
            return (int) $this->settings->getConfigValue(ConfigConstants::BASE_PATH
                . ConfigConstants::SECTION_DEBUG, 'dummy_customer_contactcode');
        }
        return (int) $this->getCustomerAttribute(self::ATTRIBUTE_CONTACTCODE);
    }

    /**
     * Get customer attribute value of currently logged in customer.
     *
     * @param String $attributeCode
     * @return String
     */
    private function getCustomerAttribute(string $attributeCode)
    {
        return $this->session->getCustomer()->getDataByKey($attributeCode);
    }

    /**
     * @InheritDoc
     */
    public function getId()
    {
        if ($this->isDummyActive()) {
            return (int) $this->settings->getConfigValue(ConfigConstants::BASE_PATH
                . ConfigConstants::SECTION_DEBUG, 'dummy_customer_id');
        }
        return $this->session->getId();
    }

    /**
     * @InheritDoc
     */
    public function isLoggedIn()
    {
        return $this->session->isLoggedIn();
    }

    /**
     * @InheritDoc
     */
    public function getByCustomAttribute(array $codeValueMap)
    {
        $collection = $this->collection->create();
        $collection->addAttributeToSelect('*');
        foreach ($codeValueMap as $code => $value) {
            $collection->addAttributeToFilter($code, ['eq' => $value]);
        }
        return $collection;
    }

    /**
     * Returns if dummy customer is enabled.
     *
     * @return bool
     */
    private function isDummyActive()
    {
        return $this->settings->isConfigValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_DEBUG,
            'dummy_customer_enable'
        );
    }

    /**
     * @inheritDoc
     */
    public function logout()
    {
        $this->session->logout();
    }

    /**
     * @inheritDoc
     */
    public function getAuthId()
    {
        if ($this->isDummyActive()) {
            return (int) $this->settings->getConfigValue(ConfigConstants::BASE_PATH
                . ConfigConstants::SECTION_DEBUG, 'dummy_customer_auth_id');
        }
        return (int) $this->getCustomerAttribute(self::ATTRIBUTE_AUTH_ID);
    }

    /**
     * @inheritDoc
     */
    public function isAuthorized(array $allowedProfiles, ?int $authId = null): bool
    {

        if (in_array(AuthorizationInterface::PROFILE_EVERYONE, $allowedProfiles)) {
            return true;
        }
        return in_array((string) ($authId ?? $this->getAuthId()), $allowedProfiles, true);
    }

    /**
     * @inheritDoc
     */
    public function canEditAuthProfiles(): bool
    {
        if ($this->isDummyActive()) {
            return $this->settings->isConfigValue(ConfigConstants::BASE_PATH
                . ConfigConstants::SECTION_DEBUG, 'dummy_customer_auth_edit');
        }
        return ('1' === $this->getCustomerAttribute(self::ATTRIBUTE_EDIT_AUTH_ID));
    }
}
