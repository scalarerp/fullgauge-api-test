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
        <AlarmsByInstrumentId id={instrument.id} />
        <div className="me-2">
          {isAlarmsManuallyInhibited && <BellOff color="red" />}
          {!isAlarmsManuallyInhibited && <BellRing color="lime" />}
        </div>
      </div>

      <SimpleGridTable anyArray={[instrument]} />
      {/* <ObjectPropsShow obj={instrument} /> */}
    </div>
  )
}

export default Instrument
