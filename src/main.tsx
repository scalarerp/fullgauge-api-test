import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { queryClient } from './services/tanstackQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<>...</>}>
      <QueryClientProvider client={queryClient}>
        kujhkjhkjhkljhlkjhkjlh
        <App />
        <Toaster
          expand
          richColors
          closeButton
          visibleToasts={9}
          // position={
          //   process.env.NODE_ENV !== 'production' ? 'bottom-right' : 'top-right'
          // }
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
)
