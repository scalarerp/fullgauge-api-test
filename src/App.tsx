import { Suspense } from 'react'
import { useGlobalStore } from './services/globalStore'

import Login from './components/login'
import SearchBox from './components/searchBox'
import Dashboard from './dashboard'

const App = () => {
  const { isLogged } = useGlobalStore()

  return (
    <div className="text-nowrap">
      <h1 className="header p-3">
        <img
          src={'logoSitrad.png'}
          title="Sitrad"
          width={158}
          height={45}
          alt="Sitrad"
        />
        <span className="ms-5">Teste api FullGauge</span>
      </h1>
      {!isLogged && <Login />}
      <hr />

      {isLogged && (
        <>
          <SearchBox />
          <Suspense fallback={<>.......buscando dados</>}>
            <Dashboard />
          </Suspense>
        </>
      )}

      {/* {instrumentsStatus.resultsQty > 0 && (
        <div>
          <div className="d-flex gap-3 mb-3 ">
            <div className="form-label">
              Quantidade de Instrumentos
              <input
                disabled
                id="resultsQty"
                className="form-control"
                value={instrumentsStatus.resultsQty}
                onChange={() => {}}
              />
            </div>
            <div className="form-label">
              Status
              <input
                disabled
                id="status"
                className="form-control"
                value={instrumentsStatus.status}
                onChange={() => {}}
              />
            </div>
          </div>

          <InstrumentList
            instruments={instrumentsStatus.results}
            handleSetInstrumentAndConverter={handleSetInstrumentAndConverter}
          /> */}
      {/* </div> */}
      {/* )} */}
      {/* <pre>{JSON.stringify(instrumentsStatus, null, 2)}</pre> */}
    </div>
  )
}

export default App
