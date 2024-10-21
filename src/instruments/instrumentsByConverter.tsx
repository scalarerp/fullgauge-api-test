import React from 'react'
import { useInstrumentsByConverterId } from '../services/querys'
import Instrument from './instrument'
import { getFilteredData } from '../utils'

const InstrumentsByConverter = ({ converterId }: { converterId: number }) => {
  const { data } = useInstrumentsByConverterId(converterId)
  const dataFiltered = getFilteredData(data)

  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-2 mb-2 ms-3 me-5">
          <div>Instruments: {data.resultsQty}</div>
        </div>
      </div>
      <div className="ms-4">
        {data.status === 200 &&
          dataFiltered.map((x) => {
            return (
              <React.Fragment key={x.id}>
                <Instrument instrument={x} />
              </React.Fragment>
            )
          })}
      </div>
    </>
  )
}

export default InstrumentsByConverter
