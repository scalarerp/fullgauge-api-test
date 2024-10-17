import Converters from './converters'
import InstrumentList from './instruments/instrumentList'
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
                className={`nav-link ${x === panel ? 'active' : ''}`}
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
      {panel === 'Instrumentos' && <InstrumentList />}
      {panel === 'Conversores' && <Converters />}
    </div>
  )
}

export default Dashboard
