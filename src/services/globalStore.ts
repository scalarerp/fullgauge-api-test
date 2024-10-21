import { create } from 'zustand'

export const panels = {
  Converters: 'Converters',
  Instruments: 'Instruments',
  Macros: 'Macros',
  Presets: 'Presets',
  Alarms: 'Alarms',
} as const

export type panelsType = (typeof panels)[keyof typeof panels]

interface IUseGlobalStore {
  user: string
  pass: string
  baseUrl: string
  isLogged: boolean
  searchString: string
  panel: panelsType
  alarmsDays: number
}

export const useGlobalStore = create<IUseGlobalStore>()(() => ({
  user: 'test',
  pass: 'test',
  baseUrl: 'https://fgserver-pro.sitrad.com/api/v1/',
  isLogged: false,
  searchString: '',
  panel: 'Converters',
  alarmsDays: 3,
}))

export const setUserAndPassword = (user: string, pass: string) =>
  useGlobalStore.setState(() => ({ user, pass }))

export const setBaseUrl = (baseUrl: string) =>
  useGlobalStore.setState(() => ({ baseUrl }))
