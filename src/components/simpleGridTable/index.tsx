import React, { useRef, useState, useMemo, useEffect } from 'react'
// import { useEventListener } from 'usehooks-ts'

const SimpleGridTable = ({
  anyArray,
  resizable = true,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anyArray: any[]
  resizable?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({})

  const updateContainerStyle = () => {
    if (!resizable) return
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const availableHeight = window.innerHeight - rect.top - 20

      setContainerStyle({
        height: `${availableHeight}px`,
        overflowY: 'auto',
      })
    }
  }

  // useEventListener('resize', updateContainerStyle)

  useEffect(() => {
    if (resizable) {
      updateContainerStyle()
      window.addEventListener('resize', updateContainerStyle)
    }
    return () => {
      window.removeEventListener('resize', updateContainerStyle)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const headers = useMemo(() => Object.keys(anyArray[0] || {}), [anyArray])

  return (
    <div>
      <div
        ref={containerRef}
        className="w-100 border rounded text-uppercase text-wrap"
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
          gridAutoRows: 'min-content',
          gap: '1px',
          backgroundColor: 'var(--bs-dark-bg-subtle)',
          fontSize: '0.85rem',
        }}
      >
        {headers.map((header, i) => (
          <div
            key={i}
            className="p-2 border-bottom"
            style={{
              position: 'sticky',
              top: 0,
              backgroundColor: 'var(--bs-dark)',
              color: 'var(--bs-light)',
              zIndex: 1,
              fontWeight: 'bold',
            }}
          >
            {header}
          </div>
        ))}

        {anyArray.map((record, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {headers.map((header, i) => (
              <div
                key={i}
                className="p-2"
                style={{
                  backgroundColor:
                    rowIndex % 2 === 0
                      ? 'var(--bs-secondary-bg)'
                      : 'var(--bs-body-bg)',
                  borderBottom: '1px solid var(--bs-border-color)',
                }}
              >
                {String(record[header] ?? '')}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SimpleGridTable
