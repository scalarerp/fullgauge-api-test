import { BellRing } from 'lucide-react'
import { useAlarmsByInstrumentId } from '../services/querys'

const AlarmsByInstrumentId = ({ id }: { id: number }) => {
  const { data } = useAlarmsByInstrumentId(id)
  const alarmsCount = data.results.filter((x) => !x.isFinalized).length

  if (alarmsCount === 0) return <></>
  return <BellRing />
}

export default AlarmsByInstrumentId
