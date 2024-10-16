export interface ApiStatus {
    status: number|string
    resultsQty: number
    results: InstrumentStatus[]
  }
  
  export interface InstrumentStatus {
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
  