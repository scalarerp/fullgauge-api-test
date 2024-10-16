import { create } from 'zustand'
interface IUseGlobalStore {
  user: string
  pass: string
  baseUrl: string
  isLogged: boolean
}

export const useGlobalStore = create<IUseGlobalStore>()(() => ({
  user: 'test',
  pass: 'test',
  baseUrl: 'https://fgserver-pro.sitrad.com/api/v1/',
  isLogged: false,
}))

export const setUserAndPassword = (user: string, pass: string) =>
  useGlobalStore.setState(() => ({ user, pass }))

export const setBaseUrl = (baseUrl: string) =>
  useGlobalStore.setState(() => ({ baseUrl }))
