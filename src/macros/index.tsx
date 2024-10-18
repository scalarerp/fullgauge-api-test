import { useGlobalStore } from '../services/globalStore'
import { useMacros } from '../services/querys'
import SimpleGridTable from '../components/simpleGridTable'

const Macros = () => {
  const { searchString } = useGlobalStore()
  const { data } = useMacros()

  if (data.status !== 200)
    return (
      <h1>
        sem dados {data.status} - {data.resultsQty}
      </h1>
    )

  const dataFiltered =
    searchString === ''
      ? data.results
      : data.results.filter((x) =>
          Object.values(x).some((s) =>
            ('' + String(s)).toLowerCase().includes(searchString.toLowerCase())
          )
        ) || []

  return (
    <>
      <div className="d-flex justify-content-between mb-2 ms-3 me-5">
        <div>Total de macros: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <SimpleGridTable anyArray={dataFiltered} />
    </>
  )
}

export default Macros
