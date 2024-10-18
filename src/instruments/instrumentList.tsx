import React from 'react'
import { useInstruments } from '../services/querys'
import Instrument from './instrument'
import { getFilteredData } from '../utils'
import ApiStatusCount from '../components/apiStatusCount'

const InstrumentList = () => {
  const { data } = useInstruments()
  const dataFiltered = getFilteredData(data)
  return (
    <>
      <ApiStatusCount resultsQty={data.resultsQty} />
      <div className="d-flex flex-column gap-3">
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

export default InstrumentList
