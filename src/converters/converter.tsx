import { CSSProperties } from 'react'
import ObjectPropsShow from '../components/objectPropsShow'
import { IConverter } from '../types'

const Converter = ({ converter }: { converter: IConverter }) => {
  const { id, name, status } = converter
  const isActive = status.toLowerCase() === 'active'

  const style: CSSProperties = {}

  return (
    <div>
      <div
        style={style}
        className={`p-2  rounded d-flex justify-content-between ${isActive ? 'active-bg' : 'bg-secondary'}  `}
      >
        <div className="fs-6 w-75 fw-bold ms-3">{name}</div>
        <div>Id: {id}</div>
      </div>

      <ObjectPropsShow obj={converter} />
    </div>
  )
}

export default Converter
