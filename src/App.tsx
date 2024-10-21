import { Suspense } from 'react'
import { useGlobalStore } from './services/globalStore'

import Login from './components/login'
import SearchBox from './components/searchBox'
import Dashboard from './dashboard'
import { LoaderCircle } from 'lucide-react'
import { useMediaQuery } from 'usehooks-ts'

const App = () => {
  const { isLogged } = useGlobalStore()
  const isMobile = useMediaQuery('(min-width: 770px)')

  return (
    <div className={`${isMobile ? 'container' : 'container-fluid'}`}>
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
            <span className="ms-5">Sitrad API Test</span>
          </h1>
          {!isLogged && <Login />}
          <hr />
        </div>
        {isLogged && (
          <>
            <SearchBox />
            <Suspense
              fallback={
                <LoaderCircle
                  className="animate-spin m-auto"
                  size={150}
                  color="var(--sitrad-color)"
                />
              }
            >
              <Dashboard />
            </Suspense>
          </>
        )}
      </div>
    </div>
  )
}

export default App
