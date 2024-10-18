import { Suspense } from 'react'
import { useGlobalStore } from './services/globalStore'

import Login from './components/login'
import SearchBox from './components/searchBox'
import Dashboard from './dashboard'

const App = () => {
  const { isLogged } = useGlobalStore()

  return (
    <div className="text-nowrap d-flex flex-column vh-100">
      <div>
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
      </div>
      {isLogged && (
        <>
          <SearchBox />
          <Suspense fallback={<>.......buscando dados</>}>
            <Dashboard />
          </Suspense>
        </>
      )}
    </div>
  )
}

export default App
