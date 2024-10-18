import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { queryClient } from './services/tanstackQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import './assets/bootstrap.scss'
import './assets/index.scss'
import { LoaderCircle } from 'lucide-react'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoaderCircle size={256} />}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster expand richColors closeButton visibleToasts={9} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
)
