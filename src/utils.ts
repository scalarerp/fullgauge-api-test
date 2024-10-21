import { useGlobalStore } from './services/globalStore'
import { ApiStatus } from './types'
export const millisecondsInHour = 3600000
export const millisecondsInDay = 3600000 * 24

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

export const getStartEndDates = () => {
  const currentDate = new Date()
  currentDate.setUTCHours(0, 0, 0, 0)

  const startDate = new Date(
    currentDate.getTime() -
      millisecondsInDay * useGlobalStore.getState().alarmsDays
  )
    .toISOString()
    .replace('.000', '')

  const endDate = new Date(currentDate.getTime() + millisecondsInDay)
    .toISOString()
    .replace('.000', '')

  return { startDate, endDate }
}
