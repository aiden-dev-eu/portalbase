<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Framework\Controller\Result\RedirectFactory;
use Magento\Framework\View\Result\PageFactory;

/**
 * Controller for order detail page, regulates authorization.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author tjanssen
 * @version 2021.06.08.0
 */

class Page implements PageInterface
{
    protected RedirectFactory $redirectFactory;

    private PageFactory $pageFactory;
    /**
     * @var LoggingInterface
     */
    private LoggingInterface $logging;

    /**
     * Constructor
     *
     * @param RedirectFactory $redirectFactory
     * @param PageFactory $pageFactory
     * @param LoggingInterface $logging
     */
    public function __construct(
        RedirectFactory $redirectFactory,
        PageFactory $pageFactory,
        LoggingInterface $logging
    ) {
        $this->redirectFactory = $redirectFactory;
        $this->pageFactory = $pageFactory;
        $this->logging = $logging;
    }

    /**
     * @inheritDoc
     */
    public function redirectToLogin()
    {
        return $this->redirect('customer/account/login');
    }

    /**
     * @inheritDoc
     */
    public function redirectToAccount()
    {
        return $this->redirect('customer/account');
    }

    /**
     * @inheritDoc
     */
    public function redirectToHomePage()
    {
        return $this->redirect('');
    }

    /**
     * @inheritDoc
     */
    public function redirect($path)
    {
        $redirect = $this->redirectFactory->create();
        $redirect->setPath($path);
        return $redirect;
    }

    /**
     * @inheritDoc
     */
    public function setCustomerAccountItemActive(string $path)
    {
        $page =  $this->pageFactory->create();
        $navigation = $page->getLayout()->getBlock('customer_account_navigation');
        if ($navigation) {
            $navigation->setActive($path);
        }
        return $page;
    }
}
