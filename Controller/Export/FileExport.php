<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Controller\Export;

use Aiden\PortalBase\Model\PageInterface;
use Magento\Authorization\Model\UserContextInterface;
use Magento\Framework\App\Action\HttpGetActionInterface;
use Magento\Framework\App\CsrfAwareActionInterface;
use Magento\Framework\App\Filesystem\DirectoryList;
use Magento\Framework\App\RequestInterface;
use Magento\Framework\App\Response\Http\FileFactory;
use Magento\Framework\App\Request\InvalidRequestException;

/**
 * Controller to convert JSON encoded data to CSV format. Triggers a download dialogue.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.01.0
 */
class FileExport implements HttpGetActionInterface, CsrfAwareActionInterface
{
    /**
     * @var FileFactory
     */
    private FileFactory $fileFactory;
    /**
     * @var UserContextInterface
     */
    private UserContextInterface $userContext;
    /**
     * @var RequestInterface
     */
    private RequestInterface $request;
    /**
     * @var PageInterface
     */
    private PageInterface $redirect;

    /**
     * @param UserContextInterface $userContext
     * @param FileFactory $fileFactory
     * @param RequestInterface $request
     * @param PageInterface $redirect
     */
    public function __construct(
        UserContextInterface $userContext,
        FileFactory $fileFactory,
        RequestInterface $request,
        PageInterface $redirect
    ) {
        $this->userContext = $userContext;
        $this->fileFactory = $fileFactory;
        $this->request = $request;
        $this->redirect = $redirect;
    }

    /**
     * @inheritDoc
     */
    public function execute()
    {
        if (!$this->isLoggedIn()) {
            return $this->redirect->redirectToLogin();
        }
        return $this->fileFactory->create(
            $this->request->getParam('filename'),
            [
                'type' => 'filename',
                'value' => $this->request->getParam('file'),
                'rm' => true
            ],
            DirectoryList::MEDIA
        );
    }

    /**
     * Check if customer is logged in.
     *
     * @return bool
     */
    private function isLoggedIn()
    {
        return ($this->userContext->getUserType() == UserContextInterface::USER_TYPE_CUSTOMER
            && $this->userContext->getUserId());
    }

    /**
     * @inheritDoc
     */
    public function createCsrfValidationException(RequestInterface $request): ?InvalidRequestException
    {
        return null;
    }

    /**
     * @inheritDoc
     */
    public function validateForCsrf(RequestInterface $request): ?bool
    {
        return true;
    }
}
