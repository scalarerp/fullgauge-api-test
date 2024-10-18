import Alarms from './alarms'
import Converters from './converters'
import InstrumentList from './instruments/instrumentList'
import Macros from './macros'
import Presets from './presets'
import { panels, panelsType, useGlobalStore } from './services/globalStore'

const Dashboard = () => {
  const { isLogged, panel } = useGlobalStore()
  if (!isLogged) return <></>

  return (
    <div>
      <ul className="nav nav-pills nav-fill gap-3 mb-3">
        {Object.keys(panels).map((x) => {
          return (
            <li key={x} className="nav-item">
              <div
                role="button"
                className={`nav-link ${x === panel ? 'active' : 'btn-outline'}`}
                aria-current="page"
                onClick={() =>
                  useGlobalStore.setState({ panel: x as panelsType })
                }
              >
                {x}
              </div>
            </li>
          )
        })}
      </ul>
      <div className="d-flex flex-column flex-grow-1 overflow-y-auto">
        {panel === 'Instrumentos' && <InstrumentList />}
        {panel === 'Conversores' && <Converters />}
        {panel === 'Macros' && <Macros />}
        {panel === 'Presets' && <Presets />}
        {panel === 'Alarmes' && <Alarms />}
      </div>
    </div>
  )
}

export default Dashboard
