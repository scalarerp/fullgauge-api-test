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
export interface IMacros extends ApiStatus {
  results: IMacro[]
}
export interface IMacro {
  id: number
  name: string
  userId: number
  creationDate: string
}

export interface IPresets extends ApiStatus {
  results: IPreset[]
}
export interface IPreset {
  creationDate: string
  id: number
  modelId: number
  modelVersion: number
  name: string
}

export interface IAlarms extends ApiStatus {
  results: IAlarm[]
}

export interface IAlarm {
  id: number
  instrumentId: number
  code: string
  description: string
  value: string
  startDate: string
  isFinalized: boolean
  isInhibited: boolean
  isRecognized: boolean
  endDate: string
  recognizedDate: string
}
