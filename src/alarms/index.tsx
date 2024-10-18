import { useAlarms } from '../services/querys'
import SimpleGridTable from '../components/simpleGridTable'
import { getFilteredData } from '../utils'

const Alarms = () => {
  const { data } = useAlarms()
  if (data.status !== 200)
    return (
      <h1>
        sem dados {data.status} - {data.resultsQty}
      </h1>
    )
  const dataFiltered = getFilteredData(data)

  return (
    <div>
      <div className="d-flex justify-content-between mb-2 ms-3 me-5">
        <div>Total de macros: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <SimpleGridTable anyArray={dataFiltered} />
    </div>
  )
}

export default Alarms
