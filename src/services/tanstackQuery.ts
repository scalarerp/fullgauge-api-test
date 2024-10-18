import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      enabled: true,
    },
  },
})

export enum storeKeys {
  alarms = 'alarms',
  alarmById = 'alarmById',
  converters = 'converters',
  converterById = 'converterById',
  instrumentsByConverterId = 'instrumentsByConverterId',
  instruments = 'instruments',
  instrumentById = 'instrumentById',
  instrumentsModels = 'instrumentsModels',
  instrumentModelById = 'instrumentModelById',
  macros = 'macros',
  macroInstrumentById = 'macroInstrumentById',
  presets = 'presets',
  alarmsByInstrumentId = 'alarmsByInstrumentId',
}
