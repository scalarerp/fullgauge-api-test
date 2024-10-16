import axios from 'axios'
import { useGlobalStore } from './globalStore'

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
      console.error(
        'Error in interceptors.request',
        JSON.stringify(error.message)
      )
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const errorUrl = `${error.config.url}`
      console.log(errorUrl)

      console.error(
        'Error in interceptors.response',
        JSON.stringify(error.message)
      )

      return Promise.reject(error)
    }
  )

  return instance
}
