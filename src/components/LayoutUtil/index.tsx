import './LayoutUtil.scss'

interface ContentBgProps {
  className?: string
  children: React.ReactNode
}

export const ContentBg = (props: ContentBgProps) => {
  const { className = '', children } = props
  return <div className={`w-100 ${className}`}>{children}</div>
}

interface GridRProps {
  noGap1rem?: boolean
  alignEnd?: boolean
  className?: string
  children: React.ReactNode
}

export const GridR = (props: GridRProps) => {
  const {
    noGap1rem = false,
    alignEnd = false,
    className = '',
    children,
  } = props
  return (
    <div
      className={`p-2 grid-responsive ${className} ${noGap1rem ? '' : 'gap-1rem'} ${alignEnd ? 'align-end' : ''}`}
    >
      {children}
    </div>
  )
}
