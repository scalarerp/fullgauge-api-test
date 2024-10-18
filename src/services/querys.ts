import { storeKeys } from './tanstackQuery'
import { api } from './api'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useAlarms = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.alarms],
    queryFn: api[storeKeys.alarms],
  })
}
export const useAlarmById = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.alarmById, id],
    queryFn: () => api[storeKeys.alarmById](id),
  })
}
export const useConverter = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.converters],
    queryFn: api[storeKeys.converters],
  })
}
export const useConverterById = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.converterById, id],
    queryFn: () => api[storeKeys.converterById](id),
  })
}
export const useInstrumentsByConverterId = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.instrumentsByConverterId, id],
    queryFn: () => api[storeKeys.instrumentsByConverterId](id),
  })
}
export const useInstruments = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.instruments],
    queryFn: api[storeKeys.instruments],
  })
}
export const useInstrumentById = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.instrumentById, id],
    queryFn: () => api[storeKeys.instrumentById](id),
  })
}
export const useInstrumentsModels = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.instrumentsModels],
    queryFn: api[storeKeys.instrumentsModels],
  })
}
export const useInstrumentModel = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.instrumentModelById, id],
    queryFn: () => api[storeKeys.instrumentModelById](id),
  })
}
export const useMacros = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.macros],
    queryFn: api[storeKeys.macros],
  })
}
// export const useAmacroInstrumentById = (id: number) => {
//   return useSuspenseQuery({
//     queryKey: [storeKeys.macroInstrumentById, id],
//     queryFn: () => api[storeKeys.macroInstrumentById](id),
//   })
// }
export const usePresets = () => {
  return useSuspenseQuery({
    queryKey: [storeKeys.presets],
    queryFn: api[storeKeys.presets],
  })
}
export const useAlarmsByInstrumentId = (id: number) => {
  return useSuspenseQuery({
    queryKey: [storeKeys.alarmsByInstrumentId, id],
    queryFn: () => api[storeKeys.alarmsByInstrumentId](id),
  })
}
