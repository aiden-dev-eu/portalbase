<?php
declare(strict_types = 1);

namespace Aiden\PortalBase\Setup\Helper;

use Aiden\PortalBase\Helper\Data;
use Aiden\PortalBase\Model\LoggingInterface;
use Magento\Cms\Api\Data\BlockInterfaceFactory;
use Magento\Cms\Model\BlockRepository;
use Magento\Framework\Api\SearchCriteriaBuilder;

class BlockSetup
{
    public const BLOCK_TITLE = 'title';
    public const BLOCK_ID = 'identifier';
    public const BLOCK_STORES = 'stores';
    public const BLOCK_ACTIVE = 'is_active';
    public const BLOCK_CONTENT = 'content';

    private LoggingInterface $logger;
    private BlockInterfaceFactory $blockFactory;
    private BlockRepository $blockRepository;
    private SearchCriteriaBuilder $searchCriteria;
    private Data $data;

    /**
     * @param LoggingInterface $logger
     * @param BlockInterfaceFactory $blockFactory
     * @param BlockRepository $blockRepository
     * @param SearchCriteriaBuilder $searchCriteria
     * @param Data $data
     */
    public function __construct(
        LoggingInterface      $logger,
        BlockInterfaceFactory $blockFactory,
        BlockRepository       $blockRepository,
        SearchCriteriaBuilder $searchCriteria,
        Data                  $data
    ) {
        $this->logger = $logger;
        $this->blockFactory = $blockFactory;
        $this->blockRepository = $blockRepository;
        $this->searchCriteria = $searchCriteria;
        $this->data = $data;
    }

    /**
     * Create a custom block.
     *
     * @param array $blockDataArrayw
     * @return void
     */
    public function create(array $blockDataArray)
    {
        foreach ($blockDataArray as $blockData) {
            $newBlock = $this->blockFactory->create();
            $newBlock->setIdentifier($this->data->getField($blockData, self::BLOCK_ID));
            $title = $this->data->getField($blockData, self::BLOCK_TITLE);
            $newBlock->setTitle($title);
            $newBlock->setIsActive($this->data->getField($blockData, self::BLOCK_ACTIVE));
            $newBlock->setContent($this->data->getField($blockData, self::BLOCK_CONTENT));
            try {
                $this->blockRepository->save($newBlock);
            } catch (\Exception $excp) {
                $this->logger->error("Error while creating block with title '" . $title . "': " . $excp->getMessage());
            }
        }
    }

    /**
     * Delete custom block.
     *
     * @param array $blockDataArray
     * @return void
     */
    public function delete(array $blockDataArray)
    {
        $ids = [];
        foreach ($blockDataArray as $blockData) {
            $ids[] = $this->data->getField($blockData, self::BLOCK_ID);
        }
        if (empty($ids)) {
            return;
        }
        $searchCriteria = $this->searchCriteria->addFilter(
            self::BLOCK_ID,
            implode(',', $ids),
            'in'
        )->create();
        $blocks = $this->blockRepository->getList($searchCriteria)->getItems();
        foreach ($blocks as $block) {
            try {
                $this->blockRepository->delete($block);
            } catch (\Exception $excp) {
                $this->logger->error("Error while deleting block with title '" . $block->getTitle() . "': "
                    . $excp->getMessage());
            }
        }
    }

    /**
     * Creates array necessary for block creation.
     *
     * @param int $blockId
     * @param string $title
     * @param int $active
     * @param string $content
     * @return array
     */
    public function createBlockData($blockId, $title, $active = 1, $content = '')
    {
        return [
            BlockSetup::BLOCK_ID => $blockId,
            BlockSetup::BLOCK_TITLE => $title,
            BlockSetup::BLOCK_ACTIVE => $active,
            BlockSetup::BLOCK_CONTENT => $content
        ];
    }
}
