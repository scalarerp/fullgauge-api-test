import { useState } from 'react'
import Collapse from '../Collapse'
import LabelValue from '../LabelValue'
import { ContentBg, GridR } from '../LayoutUtil'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ObjectPropsShow = ({
  obj,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any
}) => {
  const [showProps, setShowProps] = useState(false)

  return (
    <div className="p-2">
      <div
        style={{ backgroundColor: 'var(--bs-tertiary-bg)' }}
        role="button"
        onClick={() => setShowProps(!showProps)}
        className=" d-flex rounded"
      >
        <div className="ps-2 pe-2">
          {showProps ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div>Properties</div>
      </div>
      <Collapse show={showProps}>
        <ContentBg>
          <GridR>
            {showProps &&
              Object.keys(obj).map((x) => {
                return (
                  <LabelValue key={x} label={x}>
                    {obj[x]}
                  </LabelValue>
                )
              })}
          </GridR>
        </ContentBg>
      </Collapse>
    </div>
  )
}

export default ObjectPropsShow
