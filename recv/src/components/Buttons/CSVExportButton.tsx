import { FileArrowDown } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import { Button, colors } from 'now-ui'
import CsvDownloader from 'react-csv-downloader'

export const CSVExportButton = ({ fileName, datas, columns }: any) => {
  return (
    <CsvDownloader
      datas={datas}
      columns={columns}
      filename={`${fileName}${dayjs().format('DD/MM/YYYY-H:m:s')}`}
      extension=".csv"
    >
      {console.log(colors)}
      <Button size="sm" variant="primary" className="">
        <FileArrowDown width={'18px'} height={'18px'} />
        Exportar csv
      </Button>
    </CsvDownloader>
  )
}
