import { useGlobalStore } from './services/globalStore'
import { ApiStatus } from './types'

interface anyApiStatus extends ApiStatus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[]
}

export const getFilteredData = (data: anyApiStatus) => {
  const { searchString } = useGlobalStore.getState()

  const dataFiltered =
    searchString === ''
      ? data.results
      : data.results.filter((x) =>
          Object.values(x).some((s) =>
            ('' + String(s)).toLowerCase().includes(searchString.toLowerCase())
          )
        ) || []
  return dataFiltered
}
