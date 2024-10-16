import { useState } from 'react'
import { testApi } from './api'
import { ApiStatus } from './types'
import InstrumentList from './instrumentList'

const emptyStatus: ApiStatus = {
  status: 'Sem Dados',
  resultsQty: 0,
  results: [],
}

const App = () => {
  const [apiStatus, setApiStatus] = useState<ApiStatus>(emptyStatus)
  const [user, setUser] = useState('test')
  const [pass, setPass] = useState('test')
  const [url, setUrl] = useState(
    'https://fgserver-pro.sitrad.com/api/v1/instruments'
  )

  const handleSubmitTest = async () => {
    setApiStatus(emptyStatus)
    const result = await testApi(url, user, pass)
    if (result && result.resultsQty > 0) setApiStatus(result)
  }

  return (
    <div>
      <h1> Teste api Instrumentos FullGauge</h1>
      <div className="d-flex gap-3 ">
        <div className="form-label">
          User
          <input
            id="user"
            className="form-control"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="form-label">
          Password
          <input
            id="pass"
            type="password"
            className="form-control"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </div>
      <div className="form-label">
        URL
        <input
          id="url"
          type="url"
          className="form-control"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <button
        id="submit"
        className="btn btn-primary"
        type="button"
        onClick={handleSubmitTest}
      >
        Submit
      </button>

      <hr />
      {apiStatus.resultsQty > 0 && (
        <div>
          <div className="d-flex gap-3 mb-3 ">
            <div className="form-label">
              Quantidade de Instrumentos
              <input
                disabled
                id="resultsQty"
                className="form-control"
                value={apiStatus.resultsQty}
                onChange={() => {}}
              />
            </div>
            <div className="form-label">
              Status
              <input
                disabled
                id="status"
                className="form-control"
                value={apiStatus.status}
                onChange={() => {}}
              />
            </div>
          </div>

          <InstrumentList instruments={apiStatus.results} />
        </div>
      )}
    </div>
  )
}

export default App
