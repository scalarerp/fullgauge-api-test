import { useInstruments } from '../services/querys'

const Instruments = () => {
  const { data } = useInstruments()
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Instruments
