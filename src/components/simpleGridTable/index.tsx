import React, { useEffect, useRef, useState, useMemo } from 'react'

const SimpleGridTable = ({
  anyArray,
}: {
  anyArray: Record<string, unknown>[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({})

  const updateContainerStyle = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const availableHeight = window.innerHeight - rect.top - 150

      setContainerStyle({
        height: `${availableHeight}px`,
        overflowY: 'auto',
      })
    }
  }

  useEffect(() => {
    updateContainerStyle()
    window.addEventListener('resize', updateContainerStyle)
    return () => window.removeEventListener('resize', updateContainerStyle)
  }, [])

  const headers = useMemo(() => Object.keys(anyArray[0] || {}), [anyArray])

  return (
    <div>
      <div
        ref={containerRef}
        className="w-100 p-2 border rounded text-uppercase text-wrap"
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          gap: '3px',
          backgroundColor: 'var(--bs-dark-bg-subtle)',
          fontSize: '0.85rem',
        }}
      >
        {headers.map((header, i) => (
          <div key={i} className="p-1 border">
            {header}
          </div>
        ))}

        {anyArray.map((record, rowIndex) => {
          const zebraBg = rowIndex % 2 !== 0 ? 'bs-body-bg' : 'bs-secondary-bg'

          return (
            <React.Fragment key={rowIndex}>
              {headers.map((header, i) => (
                <div
                  key={i}
                  className="p-1"
                  style={{
                    backgroundColor: `var(--${zebraBg})`,
                  }}
                >
                  {String(record[header] ?? '')}
                </div>
              ))}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default SimpleGridTable
