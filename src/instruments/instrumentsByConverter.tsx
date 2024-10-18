import React from 'react'
import { useInstrumentsByConverterId } from '../services/querys'
import Instrument from './instrument'
import { getFilteredData } from '../utils'

const InstrumentsByConverter = ({ converterId }: { converterId: number }) => {
  const { data } = useInstrumentsByConverterId(converterId)

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
        <div>Total de Instrumentos: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <div className="ms-4">
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

export default InstrumentsByConverter
