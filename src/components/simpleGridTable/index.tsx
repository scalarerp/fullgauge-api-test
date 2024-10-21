import React, { useRef, useState, useEffect } from 'react'

const SimpleGridTable = ({
  anyArray,
  headers,
  resizable = true,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anyArray: any[]
  headers: string[]
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

  // const headers = useMemo(() => Object.keys(anyArray[0] || {}), [anyArray])

  if (!Array.isArray(anyArray) || anyArray.length === 0) {
    return <h5>Sem dados</h5>
  }

  return (
    <div className="mt-1 mb-2 p-1">
      <div
        ref={containerRef}
        className="w-100 border rounded  text-wrap"
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
