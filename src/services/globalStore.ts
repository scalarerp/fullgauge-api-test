import { create } from 'zustand'

export const panels = {
  Conversores: 'Conversores',
  Instrumentos: 'Instrumentos',
  Macros: 'Macros',
  Presets: 'Presets',
} as const

export type panelsType = (typeof panels)[keyof typeof panels]

interface IUseGlobalStore {
  user: string
  pass: string
  baseUrl: string
  isLogged: boolean
  searchString: string
  panel: panelsType
}

export const useGlobalStore = create<IUseGlobalStore>()(() => ({
  user: 'test',
  pass: 'test',
  baseUrl: 'https://fgserver-pro.sitrad.com/api/v1/',
  isLogged: false,
  searchString: '',
  panel: 'Conversores',
}))

export const setUserAndPassword = (user: string, pass: string) =>
  useGlobalStore.setState(() => ({ user, pass }))

export const setBaseUrl = (baseUrl: string) =>
  useGlobalStore.setState(() => ({ baseUrl }))
