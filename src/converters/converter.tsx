import { useState } from 'react'
import ObjectPropsShow from '../components/objectPropsShow'
import { IConverter } from '../types'
import { ChevronDown, ChevronUp } from 'lucide-react'
import InstrumentsByConverter from '../instruments/instrumentsByConverter'

const Converter = ({ converter }: { converter: IConverter }) => {
  const [showInstruments, setShowInstruments] = useState(false)
  const { id, name, status } = converter
  const isActive = status.toLowerCase() === 'active'

  const bg =
    isActive && showInstruments
      ? 'active-open-bg'
      : isActive
        ? 'active-bg'
        : 'bg-secondary'

  return (
    <div>
      <div
        role="button"
        onClick={() => setShowInstruments(!showInstruments)}
        className={`p-2 rounded d-flex justify-content-between ${bg}  `}
      >
        <div className="d-flex ">
          {showInstruments ? <ChevronUp /> : <ChevronDown />}
          <div className="fs-6 w-75 fw-bold ms-3">{name}</div>
        </div>
        <div>Id: {id}</div>
      </div>
      {showInstruments && <InstrumentsByConverter converterId={id} />}

      <ObjectPropsShow obj={converter} />
    </div>
  )
}

export default Converter
