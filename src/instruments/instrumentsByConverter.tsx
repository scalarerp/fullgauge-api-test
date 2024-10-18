import React from 'react'
import { useInstrumentsByConverterId } from '../services/querys'
import Instrument from './instrument'
import { getFilteredData } from '../utils'
import ApiStatusCount from '../components/apiStatusCount'

const InstrumentsByConverter = ({ converterId }: { converterId: number }) => {
  const { data } = useInstrumentsByConverterId(converterId)
  const dataFiltered = getFilteredData(data)

  return (
    <>
      <ApiStatusCount resultsQty={data.resultsQty} />
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
