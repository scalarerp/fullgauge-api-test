import { usePresets } from '../services/querys'
import SimpleGridTable from '../components/simpleGridTable'
import { getFilteredData } from '../utils'
import ApiStatusCount from '../components/apiStatusCount'

const Presets = () => {
  const { data } = usePresets()
  const dataFiltered = getFilteredData(data)

  return (
    <>
      <ApiStatusCount resultsQty={data.resultsQty} />
      {data.status === 200 && dataFiltered.length > 0 && (
        <SimpleGridTable anyArray={dataFiltered} />
      )}
    </>
  )
}

export default Presets
