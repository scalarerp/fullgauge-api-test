import { IConverter, IConverters, IInstrument, IInstruments } from '../types'
import { httpInstance } from './http'
import { storeKeys } from './tanstackQuery'

export const TIMEOUT = 20000

export const api = {
  async [storeKeys.alarms]() {
    const url = `alarms`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.alarmById](id: number) {
    const url = `alarms/${id}`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.converters](): Promise<IConverters> {
    const url = `converters`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.converterById](id: number): Promise<IConverter> {
    const url = `converters/${id}`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.instrumentsByConverterId](id: number) {
    const url = `converters/${id}/instruments`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.instruments](): Promise<IInstruments> {
    const url = `instruments`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.instrumentById](id: number): Promise<IInstrument> {
    const url = `instruments/${id}`
    const result = await httpInstance().get(url)
    return result.data
  },

  async [storeKeys.instrumentsModels]() {
    const url = `instruments/models`
    const result = await httpInstance().get(url)
    return result.data
  },
  async [storeKeys.instrumentModelById](id: number) {
    const url = `instruments/models/${id}`
    const result = await httpInstance().get(url)
    return result.data
  },
  async macro() {
    const url = `macros`
    const result = await httpInstance().get(url)
    return result.data
  },
  async preset() {
    const url = `presets`
    const result = await httpInstance().get(url)
    return result.data
  },
}

// alarms: 'alarms'
// alarms_alarmId: 'alarms/${idmId}'
// converter: 'converters'
// converters_converterId: 'converters/{converterId}'
// converters_converterId_instrument: 'converters/{converterId}/instruments'
// instrument: 'instruments'
// instruments_instrumentId: 'instruments/{instrumentId}'
// instruments_instrumentId_alarm: 'instruments/{instrumentId}/alarms'
//   instruments_instrumentId_alarms_configuration:'instruments/{instrumentId}/alarms/configurations'
//   instruments_instrumentId_alarms_inhibitions:'instruments/{instrumentId}/alarms/inhibitions '
//   instruments_instrumentId_alarms_inhibitions_inhibitionId:'instruments/{instrumentId}/alarms/inhibitions/{inhibitionId}'
//     instruments_instrumentId_command: 'instruments/{instrumentId}/commands'
// instruments_instrumentId_function: 'instruments/{instrumentId}/functions'
//   instruments_instrumentId_functions_code:'instruments/{instrumentId}/functions/{code}'
//   instruments_instrumentId_functions_roup: 'instruments/{instrumentId}/functions/groups'
// instruments_instrumentId_macro: 'instruments/{instrumentId}/macros'
// instruments_instrumentId_value: 'instruments/{instrumentId}/values'
// instruments_model: 'instruments/models'
// instruments_models_modelId: 'instruments/models/{modelId} id'
// macro: 'macros'
// preset: 'presets'
