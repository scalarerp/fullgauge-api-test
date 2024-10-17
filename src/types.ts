export interface ApiStatus {
  status: number | string
  resultsQty: number
}

export interface IInstruments extends ApiStatus {
  results: IInstrument[]
}
export interface IInstrument {
  id: number
  converterId: number
  name: string
  address: number
  statusId: number
  status: string
  modelId: number
  modelVersion: number
  isAlarmsManuallyInhibited: boolean
}

export interface IConverters extends ApiStatus {
  results: IConverter[]
}
export interface IConverter {
  id: number
  name: string
  statusId: string
  status: string
  statusDescription: string
  typeId: string
  type: string
  version: string
  communicationTimeout: number
  savePayloadInterval: number
  communicationFailInterval: number
}
