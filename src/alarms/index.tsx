import { useAlarms } from '../services/querys'
import SimpleGridTable from '../components/simpleGridTable'
import { getFilteredData } from '../utils'
import ApiStatusCount from '../components/apiStatusCount'
import { ALarmFieldNames } from '../types'

const Alarms = () => {
  const { data } = useAlarms()
  const dataFiltered = getFilteredData(data)

  return (
    <>
      <ApiStatusCount resultsQty={data.resultsQty} />
      {data.status === 200 && dataFiltered.length > 0 && (
        <SimpleGridTable anyArray={dataFiltered} headers={ALarmFieldNames} />
      )}
    </>
  )
}

export default Alarms
