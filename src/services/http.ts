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
      toast.error('API request Error:', {
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
      console.log(error)
      queryClient.removeQueries()
      useGlobalStore.setState({ isLogged: false })
      const errorUrl = `${error.config.url}`

      const errorsDescription = [error.message]

      if (error.code === 'ERR_BAD_REQUEST' || error.response.data.errors) {
        error.response.data.errors.forEach((x: string) => {
          errorsDescription.push(x)
        })
      }

      toast.error('API response Error: ' + errorUrl, {
        description: errorsDescription.join(', '),
      })

      return Promise.reject(error)
    }
  )

  return instance
}
