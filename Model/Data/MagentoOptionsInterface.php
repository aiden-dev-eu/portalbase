<?php

namespace Aiden\PortalBase\Model\Data;

/**
 * Interface representation of a Magento options and its possible fields
 * Should not be exposed to api.
 *
 * @copyright Aiden. All rights reserved.
 * https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.07.10.1
 */
interface MagentoOptionsInterface
{
    //General fields
    public const DOCUMENT_TYPE = 'U_se_portaldoctype';
    public const ORDERLIST_ID = 'U_se_orderlistid';
    public const ORDERLIST_NAME = 'U_se_orderlistname';
    public const ORDERLIST_TYPE = 'U_se_type';
    public const WISHLIST_COMMENT = 'U_se_wishcomment';
    public const COMMENT = 'remarks';
    public const PREFLIST_ID = 'U_se_preflistid';
    public const UPLOAD_FILE_NAME = 'UploadFileName';
    public const NUM_AT_CARD = 'NumAtCard';
    public const ATTACHMENTS = 'U_se_attachmentreference';
    //Edu wizard specific fields
    public const FINANCING_TYPE = 'edu_financing_type';
    public const LEASE_DISCOUNT = 'edu_lease_discount';
    public const EDU_ORDER = 'edu_order';
    public const IBAN_ACCOUNT = 'U_se_bankaccount';
    public const IBAN_ACCOUNT_NAME = 'U_se_bankaccholder';
    public const STUDENT_ID  = 'U_se_edu_studentid';
    public const STUDENT_NAME = 'edu_student_name';
    public const SCHOOL_CARDCODE = 'edu_school_cardcode';
    public const SCHOOL_CONTRIBUTION_APPLIED = 'edu_schoolcontribution_applied';
    public const NUMBER_OF_TERMS = 'U_se_number_of_terms';

    /**
     * Set the order to type order.
     *
     * @return $this
     */
    public function setDocumentTypeOrder(): MagentoOptionsInterface;

    /**
     * Set the document type to type quote.
     *
     * @return $this
     */
    public function setDocumentTypeQuote(): MagentoOptionsInterface;

    /**
     * Get document type
     *
     * @return string
     */
    public function getDocumentType();

    /**
     * Set orderlist id
     *
     * @param int $orderlistId
     * @return $this
     */
    public function setOrderlistId(int $orderlistId);

    /**
     * Get orderlist id
     *
     * @return int
     */
    public function getOrderlistId();

    /**
     * Returns if Orderlist Id is defined.
     *
     * @return bool
     */
    public function hasOrderlistId();

    /**
     * Set orderlist name
     *
     * @param string $orderlistName
     * @return $this
     */
    public function setOrderlistName(string $orderlistName);

    /**
     * Get orderlist name
     *
     * @return string
     */
    public function getOrderlistName();

    /**
     * Set orderlist type
     *
     * @param string $orderlistType
     * @return $this
     */
    public function setOrderlistType(string $orderlistType);

    /**
     * Get orderlist type
     *
     * @return string
     */
    public function getOrderlistType();

    /**
     * Set wishlist comment
     *
     * @param string $wishlistComment
     * @return $this
     */
    public function setWishlistComment(string $wishlistComment);

    /**
     * Get wishlist comment
     *
     * @return string
     */
    public function getWishlistComment();

    /**
     * Set comment
     *
     * @param string $comment
     * @return $this
     */
    public function setComment(string $comment);

    /**
     * Get comment
     *
     * @return string
     */
    public function getComment();

    /**
     * Return is comment is defined and not empty.
     *
     * @return bool
     */
    public function hasComment();

    /**
     * Set preflist id
     *
     * @param int $preflistId
     * @return $this
     */
    public function setPreflistId(int $preflistId);

    /**
     * Get preflist id
     *
     * @return int
     */
    public function getPreflistId();

    /**
     * Set upload file name
     *
     * @param string $uploadFileName
     * @return $this
     */
    public function setUploadFileName(string $uploadFileName);

    /**
     * Get upload file name
     *
     * @return string
     */
    public function getUploadFileName();

    /**
     * Set NumAtCard
     *
     * @param string $numAtCard
     * @return $this
     */
    public function setNumAtCard(string $numAtCard);

    /**
     * Get NumAtCard
     *
     * @return string
     */
    public function getNumAtCard();

    /**
     * Set attachment reference
     *
     * @param string $attachmentRef
     * @return $this
     */
    public function setAttachementReference(string $attachmentRef);

    /**
     * Get attachment reference
     *
     * @return string
     */
    public function getAttachmentReference();

    /**
     * Set financing type
     *
     * @param string $financingType
     * @return $this
     */
    public function setFinancingType(string $financingType);

    /**
     * Get financing type
     *
     * @return string
     */
    public function getFinancingType();

    /**
     * Set lease discount
     *
     * @param float $leaseDiscount
     * @return $this
     */
    public function setLeaseDiscount(float $leaseDiscount);

    /**
     * Get lease discount
     *
     * @return float
     */
    public function getLeasDiscount();

    /**
     * Set is edu order
     *
     * @param bool $eduOrder
     * @return $this
     */
    public function setIsEduOrder(bool $eduOrder);

    /**
     * Get is edu order
     *
     * @return bool
     */
    public function isEduOrder();

    /**
     * Set iban account
     *
     * @param string $ibanAccount
     * @return $this
     */
    public function setIbanAccount(string $ibanAccount);

    /**
     * Get iban account
     *
     * @return string
     */
    public function getIbanAccount();

    /**
     * Set iban account name
     *
     * @param string $ibanAccountName
     * @return $this
     */
    public function setIbanAccountName(string $ibanAccountName);

    /**
     * Get iban account name
     *
     * @return string
     */
    public function getIbanAccountName();

    /**
     * Set student id
     *
     * @param string $studentId
     * @return $this
     */
    public function setStudentId(string $studentId);

    /**
     * Get student id
     *
     * @return string
     */
    public function getStudentId();

    /**
     * Set student name
     *
     * @param string $studentName
     * @return $this
     */
    public function setStudentName(string $studentName);

    /**
     * Get student name
     *
     * @return string
     */
    public function getStudentName();

    /**
     * Set school CardCode
     *
     * @param string $schoolCardCode
     * @return $this
     */
    public function setSchoolCardCode(string $schoolCardCode);

    /**
     * Get school CardCode
     *
     * @return string
     */
    public function getSchoolCardCode();

    /**
     * Set is school contribution applied
     *
     * @param bool $schoolContrApp
     * @return $this
     */
    public function setSchoolContributionApplied(bool $schoolContrApp);

    /**
     * Get is school contribution applied
     *
     * @return bool
     */
    public function isSchoolContributionApplied();

    /**
     * Set number of terms
     *
     * @param int $numberOfTerms
     * @return $this
     */
    public function setNumberOfTerms(int $numberOfTerms);

    /**
     * Get number of terms
     *
     * @return int
     */
    public function getNumberOfTerms();

    /**
     * Convert array of object data with to array with keys requested in $keys array
     *
     * @param array $keys array of required keys
     * @return array
     */
    public function toArray(array $keys = []);

    /**
     * Checks whether the object is empty
     *
     * @return bool
     */
    public function isEmpty();

    /**
     * Convert object data to JSON
     *
     * @param array $keys array of required keys
     * @return bool|string
     * @throws \InvalidArgumentException
     */
    public function toJson(array $keys = []);

    /**
     * Overwrite data in the object.
     *
     * The $key parameter can be string or array.
     * If $key is string, the attribute value will be overwritten by $value
     *
     * If $key is an array, it will overwrite all the data in the object.
     *
     * @param string|array $key
     * @param mixed $value
     * @return $this
     */
    public function setData($key, $value = null);

    /**
     * Object data getter
     *
     * If $key is not defined will return all the data as an array.
     * Otherwise it will return value of the element specified by $key.
     * It is possible to use keys like a/b/c for access nested array data
     *
     * If $index is specified it will assume that attribute data is an array
     * and retrieve corresponding member. If data is the string - it will be explode
     * by new line character and converted to array.
     *
     * @param string $key
     * @param string|int $index
     * @return mixed
     */
    public function getData($key = '', $index = null);
}
