import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './main/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { queryClient } from 'store/tanstackQuery'

import 'assets/bootstrap.scss'
import 'assets/index.scss'
import ClockLoading from 'common/components/ClockLoading'

const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<ClockLoading />}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster
          expand
          richColors
          closeButton
          visibleToasts={9}
          position={
            process.env.NODE_ENV !== 'production' ? 'bottom-right' : 'top-right'
          }
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
)
