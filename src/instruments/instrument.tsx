import { BellOff, BellRing } from 'lucide-react'
import { IInstrument } from '../types'
import AlarmsByInstrumentId from './alarmsByInstrumentId'
import SimpleGridTable from '../components/simpleGridTable'

const Instrument = ({ instrument }: { instrument: IInstrument }) => {
  const { status, name, isAlarmsManuallyInhibited } = instrument
  const isActive = status.toLowerCase() === 'active'

  return (
    <div className="">
      <div
        className={`rounded p-2 d-flex justify-content-between ${isActive ? 'active-bg' : 'bg-secondary'}`}
      >
        <div className="ms-1 fs-6 w-75 fw-bold">{name}</div>

        <div className="me-2">
          {isAlarmsManuallyInhibited && <BellOff color="red" />}
          {!isAlarmsManuallyInhibited && (
            <AlarmsByInstrumentId id={instrument.id} />
          )}
        </div>
      </div>

      <SimpleGridTable anyArray={[instrument]} resizable={false} />
    </div>
  )
}

export default Instrument
