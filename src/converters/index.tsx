import { useGlobalStore } from '../services/globalStore'
import { useConverter } from '../services/querys'
import { getFilteredData } from '../utils'
import Converter from './converter'

const Converters = () => {
  const { data, error } = useConverter()
  if (error) {
    console.log(error)
    useGlobalStore.setState({ isLogged: false })
    return <h1>api error</h1>
  }
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
        <div>Total de Conversores: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <div className="d-flex flex-column gap-3 ">
        {dataFiltered.map((x) => {
          return (
            <div key={x.id}>
              <Converter converter={x} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Converters
