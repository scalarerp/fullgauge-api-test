import { BellOff, BellRing } from 'lucide-react'
import ObjectPropsShow from '../components/objectPropsShow'
import { IInstrument } from '../types'

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
          {!isAlarmsManuallyInhibited && <BellRing color="lime" />}
        </div>
      </div>

      <ObjectPropsShow obj={instrument} />
    </div>
  )
}

export default Instrument
