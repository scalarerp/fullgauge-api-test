import ObjectPropsShow from '../components/objectPropsShow'
import { IInstrument } from '../types'

const Instrument = ({ instrument }: { instrument: IInstrument }) => {
  const { status, converterId, id, name, isAlarmsManuallyInhibited } =
    instrument
  const isActive = status.toLowerCase() === 'active'
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <div>Id: {id}</div>
        <div>Converter Id: {converterId}</div>
      </div>
      <div className="card-body  ">
        <div className="card-title d-flex justify-content-between">
          <div className="fs-6 w-75 fw-bold">{name}</div>

          <div className={`badge ${isActive ? 'bg-success' : 'bg-secondary'} `}>
            {isActive ? 'Ativo' : '---'}
          </div>
          {isActive && (
            <div className={`badge ${isActive ? 'bg-success' : 'bg-danger'} `}>
              {!isAlarmsManuallyInhibited ? 'Alarmes Ativos' : 'Sem Alarmes'}
            </div>
          )}
        </div>

        <ObjectPropsShow obj={instrument} showPropsInitial />
      </div>
    </div>
  )
}

export default Instrument
