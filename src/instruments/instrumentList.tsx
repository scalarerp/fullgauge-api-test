import React from 'react'
import { useGlobalStore } from '../services/globalStore'
import { useInstruments } from '../services/querys'
import Instrument from './instrument'

const InstrumentList = () => {
  const { searchString } = useGlobalStore()
  const { data } = useInstruments()

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
    <div>
      <div className="d-flex justify-content-between mb-2 ms-3 me-5">
        <div>Total de Instrumentos: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <div className="grid-cols">
        {dataFiltered.map((x) => {
          return (
            <React.Fragment key={x.id}>
              <Instrument instrument={x} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default InstrumentList
