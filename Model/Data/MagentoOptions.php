<?php

namespace Aiden\PortalBase\Model\Data;

use Magento\Framework\DataObject;

class MagentoOptions extends DataObject implements MagentoOptionsInterface
{
    /**
     * @inheritDoc
     */
    public function setDocumentTypeOrder(): MagentoOptionsInterface
    {
        return $this->setDocumentType('order');
    }

    /**
     * @inheritDoc
     */
    public function setDocumentTypeQuote(): MagentoOptionsInterface
    {
        return $this->setDocumentType('quotation');
    }

    /**
     * Set document type to a specific value.
     *
     * @param string $documentType
     * @return $this
     */
    private function setDocumentType(string $documentType): MagentoOptionsInterface
    {
        return $this->setData(self::DOCUMENT_TYPE, $documentType);
    }

    /**
     * @inheritDoc
     */
    public function getDocumentType()
    {
        return $this->_getData(self::DOCUMENT_TYPE);
    }

    /**
     * @inheritDoc
     */
    public function setOrderlistId(int $orderlistId)
    {
        return $this->setData(self::ORDERLIST_ID, $orderlistId);
    }

    /**
     * @inheritDoc
     */
    public function getOrderlistId()
    {
        return $this->_getData(self::ORDERLIST_ID);
    }

    /**
     * @inheritDoc
     */
    public function hasOrderlistId()
    {
        return ($this->getOrderlistId() !== null);
    }

    /**
     * @inheritDoc
     */
    public function setOrderlistName(string $orderlistName)
    {
        return $this->setData(self::ORDERLIST_NAME, $orderlistName);
    }

    /**
     * @inheritDoc
     */
    public function getOrderlistName()
    {
        return $this->_getData(self::ORDERLIST_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setOrderlistType(string $orderlistType)
    {
        return $this->setData(self::ORDERLIST_TYPE, $orderlistType);
    }

    /**
     * @inheritDoc
     */
    public function getOrderlistType()
    {
        return $this->_getData(self::ORDERLIST_TYPE);
    }

    /**
     * @inheritDoc
     */
    public function setWishlistComment(string $wishlistComment)
    {
        return $this->setData(self::WISHLIST_COMMENT, $wishlistComment);
    }

    /**
     * @inheritDoc
     */
    public function getWishlistComment()
    {
        return $this->getData(self::WISHLIST_COMMENT);
    }

    /**
     * @inheritDoc
     */
    public function setComment(string $comment)
    {
        return $this->setData(self::COMMENT, $comment);
    }

    /**
     * @inheritDoc
     */
    public function getComment()
    {
        return $this->_getData(self::COMMENT);
    }

    /**
     * @inheritDoc
     */
    public function hasComment()
    {
        return ($this->getComment() !== null && strlen($this->getComment()) > 0);
    }

    /**
     * @inheritDoc
     */
    public function setPreflistId(int $preflistId)
    {
        return $this->setData(self::PREFLIST_ID, $preflistId);
    }

    /**
     * @inheritDoc
     */
    public function getPreflistId()
    {
        return $this->_getData(self::PREFLIST_ID);
    }

    /**
     * @inheritDoc
     */
    public function setUploadFileName(string $uploadFileName)
    {
        return $this->setData(self::UPLOAD_FILE_NAME, $uploadFileName);
    }

    /**
     * @inheritDoc
     */
    public function getUploadFileName()
    {
        return $this->_getData(self::UPLOAD_FILE_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setNumAtCard(string $numAtCard)
    {
        return $this->setData(self::NUM_AT_CARD, $numAtCard);
    }

    /**
     * @inheritDoc
     */
    public function getNumAtCard()
    {
        return $this->_getData(self::NUM_AT_CARD);
    }

    /**
     * @inheritDoc
     */
    public function setAttachementReference(string $attachmentRef)
    {
        return $this->setData(self::ATTACHMENTS, $attachmentRef);
    }

    /**
     * @inheritDoc
     */
    public function getAttachmentReference()
    {
        return $this->_getData(self::ATTACHMENTS);
    }

    /**
     * @inheritDoc
     */
    public function setFinancingType(string $financingType)
    {
        return $this->setData(self::FINANCING_TYPE, $financingType);
    }

    /**
     * @inheritDoc
     */
    public function getFinancingType()
    {
        return $this->_getData(self::FINANCING_TYPE);
    }

    /**
     * @inheritDoc
     */
    public function setLeaseDiscount(float $leaseDiscount)
    {
        return $this->setData(self::LEASE_DISCOUNT, $leaseDiscount);
    }

    /**
     * @inheritDoc
     */
    public function getLeasDiscount()
    {
        return $this->_getData(self::LEASE_DISCOUNT);
    }

    /**
     * @inheritDoc
     */
    public function setIsEduOrder(bool $eduOrder)
    {
        return $this->setData(self::EDU_ORDER, $eduOrder);
    }

    /**
     * @inheritDoc
     */
    public function isEduOrder()
    {
        return $this->_getData(self::EDU_ORDER);
    }

    /**
     * @inheritDoc
     */
    public function setIbanAccount(string $ibanAccount)
    {
        return $this->setData(self::IBAN_ACCOUNT, $ibanAccount);
    }

    /**
     * @inheritDoc
     */
    public function getIbanAccount()
    {
        return $this->_getData(self::IBAN_ACCOUNT);
    }

    /**
     * @inheritDoc
     */
    public function setIbanAccountName(string $ibanAccountName)
    {
        return $this->setData(self::IBAN_ACCOUNT_NAME, $ibanAccountName);
    }

    /**
     * @inheritDoc
     */
    public function getIbanAccountName()
    {
        return $this->_getData(self::IBAN_ACCOUNT_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setStudentId(string $studentId)
    {
        return $this->setData(self::STUDENT_ID, $studentId);
    }

    /**
     * @inheritDoc
     */
    public function getStudentId()
    {
        return $this->_getData(self::STUDENT_ID);
    }

    /**
     * @inheritDoc
     */
    public function setStudentName(string $studentName)
    {
        return $this->setData(self::STUDENT_NAME, $studentName);
    }

    /**
     * @inheritDoc
     */
    public function getStudentName()
    {
        return $this->_getData(self::STUDENT_NAME);
    }

    /**
     * @inheritDoc
     */
    public function setSchoolCardCode(string $schoolCardCode)
    {
        return $this->setData(self::SCHOOL_CARDCODE, $schoolCardCode);
    }

    /**
     * @inheritDoc
     */
    public function getSchoolCardCode()
    {
        return $this->_getData(self::SCHOOL_CARDCODE);
    }

    /**
     * @inheritDoc
     */
    public function setSchoolContributionApplied(bool $schoolContrApp)
    {
        return $this->setData(self::SCHOOL_CONTRIBUTION_APPLIED, $schoolContrApp);
    }

    /**
     * @inheritDoc
     */
    public function isSchoolContributionApplied()
    {
        return $this->_getData(self::SCHOOL_CONTRIBUTION_APPLIED);
    }

    /**
     * @inheritDoc
     */
    public function setNumberOfTerms(int $numberOfTerms)
    {
        return $this->setData(self::NUMBER_OF_TERMS, $numberOfTerms);
    }

    /**
     * @inheritDoc
     */
    public function getNumberOfTerms()
    {
        return $this->_getData(self::NUMBER_OF_TERMS);
    }
}
