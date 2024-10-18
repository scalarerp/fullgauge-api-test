import ApiStatusCount from '../components/apiStatusCount'
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

  const dataFiltered = getFilteredData(data)

  return (
    <>
      <ApiStatusCount resultsQty={data.resultsQty} />

      <div className="d-flex flex-column gap-3 ">
        {data.status === 200 &&
          dataFiltered.map((x) => {
            return (
              <div key={x.id}>
                <Converter converter={x} />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Converters
