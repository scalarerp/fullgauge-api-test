import axios from 'axios'
import { useGlobalStore } from './globalStore'
import { toast } from 'sonner'
import { queryClient } from './tanstackQuery'

export const TIMEOUT = 20000

export const httpInstance = () => {
  const { user, pass, baseUrl } = useGlobalStore.getState()
  const auth = btoa(`${user}:${pass}`)

  const instance = axios.create({
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })

  instance.defaults.baseURL = baseUrl
  instance.defaults.timeout = TIMEOUT

  instance.interceptors.request.use(
    (request) => {
      return request
    },
    (error) => {
      queryClient.removeQueries()
      useGlobalStore.setState({ isLogged: false })
      toast.error('Api request Error:', {
        description: JSON.stringify(error.message),
      })
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      queryClient.removeQueries()
      useGlobalStore.setState({ isLogged: false })
      const errorUrl = `${error.config.url}`

      toast.error('Api response Error: ' + errorUrl, {
        description: JSON.stringify(error.message),
      })

      return Promise.reject(error)
    }
  )

  return instance
}
