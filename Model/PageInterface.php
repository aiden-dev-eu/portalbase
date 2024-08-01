<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Model;

use Magento\Framework\View\Result\PageFactory;

interface PageInterface
{
    /**
     * Redirects to account login page
     *
     * @return \Magento\Framework\Controller\Result\Redirect
     */
    public function redirectToLogin();

    /**
     * Redirects to account page
     *
     * @return \Magento\Framework\Controller\Result\Redirect
     */
    public function redirectToAccount();

    /**
     * Redirects to home page.
     *
     * @return \Magento\Framework\Controller\Result\Redirect
     */
    public function redirectToHomePage();

    /**
     * Redirects to path provided.
     *
     * @param string $path
     * @return \Magento\Framework\Controller\Result\Redirect
     */
    public function redirect($path);

    /**
     * Sets menu item in Customer Account Menu active.
     *
     * @param string $path
     * @return \Magento\Framework\View\Result\Page
     */
    public function setCustomerAccountItemActive(string $path);
}
