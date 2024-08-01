<?php

declare(strict_types = 1);

namespace Aiden\PortalBase\Model\Api\Export;

use Aiden\PortalBase\Api\Export\FileExportInterface;
use Aiden\PortalBase\Constants\ConfigConstants;
use Aiden\PortalBase\Convert\ExcelXml;
use Aiden\PortalBase\Api\Data\FileExportRequestInterface;
use Aiden\PortalBase\Model\ConfigInterface;
use Aiden\PortalBase\Model\StoreInterface;
use Magento\Framework\App\Filesystem\DirectoryList;
use Magento\Framework\Filesystem;
use Magento\Framework\Filesystem\Directory\WriteInterface;
use Magento\Ui\Model\Export\SearchResultIterator;
use Magento\Framework\Convert\ExcelFactory;
use Magento\Ui\Model\Export\SearchResultIteratorFactory;

/**
 * Api Model to write JSON encoded data into a temporary file with Excel XML or CSV format.
 *
 * @copyright https://www.aiden.eu
 * @author thomas.janssen@aiden.eu
 * @version 2023.10.01.0
 */
class FileExport implements FileExportInterface
{
    private const EXPORT = 'export';
    private const CSV = '.csv';
    private const XML = '.xml';
    /**
     * @var WriteInterface
     */
    private WriteInterface $directory;
    /**
     * @var ConfigInterface
     */
    private ConfigInterface $config;
    /**
     * @var ExcelFactory
     */
    private ExcelFactory $excelFactory;
    /**
     * @var SearchResultIteratorFactory
     */
    private SearchResultIteratorFactory $iteratorFactory;
    /**
     * @var StoreInterface
     */
    private StoreInterface $store;

    /**
     * @param Filesystem $filesystem
     * @param ConfigInterface $config
     * @param ExcelFactory $excelFactory
     * @param SearchResultIteratorFactory $iteratorFactory
     * @param StoreInterface $store
     * @throws \Magento\Framework\Exception\FileSystemException
     */
    public function __construct(
        Filesystem $filesystem,
        ConfigInterface $config,
        ExcelFactory $excelFactory,
        SearchResultIteratorFactory $iteratorFactory,
        StoreInterface $store
    ) {
        $this->directory = $filesystem->getDirectoryWrite(DirectoryList::MEDIA);
        $this->config = $config;
        $this->excelFactory = $excelFactory;
        $this->iteratorFactory = $iteratorFactory;
        $this->store = $store;
    }
    /**
     * @inheritDoc
     */
    public function csv(FileExportRequestInterface $request)
    {
        // md5() here is not for cryptographic use.
        // phpcs:ignore Magento2.Security.InsecureFunction
        $suffix = md5(microtime());
        $file = self::EXPORT . '/' . self::EXPORT . $suffix . self::CSV;

        $delimiter = $this->config->getConfigValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_EXPORT . ConfigConstants::SUB_SECTION_CSV,
            'delimiter'
        );
        $enclosure = $this->config->getConfigValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_EXPORT . ConfigConstants::SUB_SECTION_CSV,
            'enclosure'
        );

        $this->directory->create(self::EXPORT);
        $stream = $this->directory->openFile($file, 'w+');
        $stream->lock();
        $stream->writeCsv($this->getHeaders($request->getExportData()), $delimiter, $enclosure);
        foreach ($request->getExportData() as $item) {
            $item = $this->sanitizeFileData($item);
            $stream->writeCsv(array_values($item), $delimiter, $enclosure);
        }
        $stream->unlock();
        $stream->close();
        return $this->buildUrl($request->getFileName(), $file, self::CSV);
    }

    /**
     * @inheritDoc
     */
    public function xml(FileExportRequestInterface $request)
    {
        // md5() here is not for cryptographic use.
        // phpcs:ignore Magento2.Security.InsecureFunction
        $suffix = md5(microtime());
        $file = self::EXPORT . '/' . self::EXPORT . $suffix . self::XML;

        $sheetName = $this->config->getConfigValue(
            ConfigConstants::BASE_PATH . ConfigConstants::SECTION_EXPORT . ConfigConstants::SUB_SECTION_EXCEL,
            'sheet_name'
        );

        /** Although this iterator isn't used it's required by the Excel class that ExcelXml extends.
         * Instantiated with empty array.
         */
        /** @var SearchResultIterator $searchResultIterator */
        $searchResultIterator = $this->iteratorFactory->create(['items' => []]);

        /** @var ExcelXml $excel */
        $excel = $this->excelFactory->create(['iterator' => $searchResultIterator]);

        $this->directory->create(self::EXPORT);
        $stream = $this->directory->openFile($file, 'w+');
        $stream->lock();

        $excel->setDataHeader($this->getHeaders($request->getExportData()));

        $exportData = [];
        foreach ($request->getExportData() as $item) {
            $exportData[] = $this->sanitizeFileData($item);
        }

        $excel->setDataRows($exportData);
        $excel->write($stream, $sheetName . self::XML);

        $stream->unlock();
        $stream->close();
        return $this->buildUrl($request->getFileName(), $file, self::XML);
    }

    /**
     * Builds url string for file export controller GET call.
     *
     * @param string $fileName
     * @param string $file
     * @param string $fileType
     * @return string
     */
    private function buildUrl(string $fileName, string $file, string $fileType)
    {
        $url = $this->store->getBaseUrl() . 'portalbase/export/fileexport';
        $url .= '?filename=' . $this->sanitizeFileName($fileName, $fileType);
        return $url . '&file=' . $file;
    }

    /**
     * Retrieve headers for csv file (array keys of one line).
     *
     * @param array $data
     * @return array|int[]|string[]
     */
    private function getHeaders(array $data = [])
    {
        return array_keys(current($data));
    }

    /**
     * Checks the filename for completeness.
     *
     * @param string $fileName
     * @param string $fileExtension
     * @return string
     */
    private function sanitizeFileName(string $fileName, string $fileExtension)
    {
        if (strlen($fileName ?? '') == 0) {
            return self::EXPORT . $fileExtension;
        }
        if (!str_ends_with($fileName, $fileExtension)) {
            $fileName .= $fileExtension;
        }
        return $fileName;
    }

    /**
     * Strips item values from new line or return characters
     *
     * @param array $item
     * @return array
     */
    private function sanitizeFileData(array $item): array
    {
        foreach ($item as $key => $value) {
            if (gettype($value) !== 'string') {
                continue;
            }

            $item[$key] = preg_replace("/\r\n|\r|\n|\s+/", ' ', trim($value));
        }

        return $item;
    }
}
