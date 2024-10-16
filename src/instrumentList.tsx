import { useState } from 'react'
import { InstrumentStatus } from './types'

const InstrumentList = ({
  instruments,
  handleSetInstrumentAndConverter,
}: {
  instruments: InstrumentStatus[]
  handleSetInstrumentAndConverter: (instrument: InstrumentStatus) => void
}) => {
  const [search, setSearch] = useState('')

  const data =
    search === ''
      ? instruments
      : instruments.filter((x) =>
          Object.values(x).some((s) =>
            ('' + String(s)).toLowerCase().includes(search.toLowerCase())
          )
        ) || []

  return (
    <div>
      <div className="form-label mb-3">
        Busca:
        <input
          type="search"
          className="form-control"
          value={search}
          onFocus={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex flex-wrap gap-3 text-nowrap">
        {data.map((x) => {
          return (
            <div
              onClick={() => handleSetInstrumentAndConverter(x)}
              key={x.id}
              className="card"
              style={{ width: 300 }}
            >
              <div className="card-header d-flex justify-content-between">
                <div>Id: {x.id}</div>
                <div>Converter Id: {x.converterId}</div>
              </div>
              <div className="card-body  ">
                <div className="card-title d-flex justify-content-between">
                  <div className="fs-6 w-75 fw-bold">{x.name}</div>

                  <span
                    className={`badge ${x.status.toLowerCase() === 'active' ? 'bg-success' : 'bg-secondary'} `}
                  >
                    {x.status}
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem' }}>
                  <div>Address: {x.address}</div>
                  <div>ModelId: {x.modelId}</div>
                  <div>ModelVersion: {x.modelVersion}</div>
                </div>

                <div className="form-check form-switch">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Alarmes
                  </label>

                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    checked={!x.isAlarmsManuallyInhibited}
                    id="flexSwitchCheckDefault"
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>{' '}
    </div>
  )
}

export default InstrumentList
