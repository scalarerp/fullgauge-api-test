import { Suspense } from 'react'
import { useGlobalStore } from './services/globalStore'
import Instruments from './instruments'

const App = () => {
  const { user, pass, baseUrl, isLogged } = useGlobalStore()

  return (
    <div>
      <h1> Teste api Instrumentos FullGauge</h1>
      {!isLogged && (
        <>
          <div className="d-flex gap-3 ">
            <div className="form-label">
              User
              <input
                id="user"
                className="form-control"
                value={user}
                onChange={(e) =>
                  useGlobalStore.setState({ user: e.target.value })
                }
              />
            </div>

            <div className="form-label">
              Password
              <input
                id="pass"
                type="password"
                className="form-control"
                value={pass}
                onChange={(e) =>
                  useGlobalStore.setState({ pass: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-label">
            URL
            <input
              id="baseUrl"
              type="url"
              className="form-control"
              value={baseUrl}
              onChange={(e) => {
                useGlobalStore.setState({ baseUrl: e.target.value })
              }}
            />
          </div>
          <button
            id="submit"
            className="btn btn-primary"
            type="button"
            onClick={() => {
              useGlobalStore.setState({ isLogged: true })
              console.log('login')
            }}
          >
            Login
          </button>
        </>
      )}
      <hr />

      {isLogged && (
        <>
          logado
          <Suspense fallback={<>.......buscando dados</>}>
            <Instruments />
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
