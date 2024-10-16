import axios from 'axios'
import { ApiStatus } from './types'

export const TIMEOUT = 20000

let auth = ''

export const testApi = async (
  url: string,
  user: string,
  pass: string
): Promise<ApiStatus> => {
  auth = btoa(`${user}:${pass}`)

  const result = await httpInstance().get(url)
  return result.data
}

const httpInstance = () => {
  const instance = axios.create({
    headers: {
      // Accept: 'application/json',
      Authorization: `Basic ${auth}`,
      // Origin: 'http://localhost:5173/',
    },
  })

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
