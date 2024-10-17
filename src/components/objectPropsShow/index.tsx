import { useState } from 'react'
import Collapse from '../Collapse'

const ObjectPropsShow = ({
  obj,
  showPropsInitial = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any
  showPropsInitial?: boolean
}) => {
  const [showProps, setShowProps] = useState(showPropsInitial)

  return (
    <div className="p-2">
      <div
        style={{ backgroundColor: 'var(--bs-tertiary-bg)' }}
        role="button"
        onClick={() => setShowProps(!showProps)}
        className="fs-6"
      >
        {showProps ? '🔼 Ocultar' : '🔽 Mostrar'} Props
      </div>
      <Collapse show={showProps}>
        <>
          {showProps &&
            Object.keys(obj).map((x) => {
              return (
                <div key={x} className="d-flex justify-content-between">
                  <div
                    className="w-50 f-bold me-2 text-end"
                    style={{ width: 300 }}
                  >
                    {x} :
                  </div>
                  <div>{obj[x]}</div>
                </div>
              )
            })}
        </>
      </Collapse>
    </div>
  )
}

export default ObjectPropsShow
