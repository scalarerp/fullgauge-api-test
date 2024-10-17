interface Props {
  label: string
  children: React.ReactNode
  className?: string
  isLabelHalfSize?: boolean
}

const LabelValue = (props: Props) => {
  const {
    label = '',
    children,
    className = '',
    isLabelHalfSize = false,
  } = props

  const _label = `${label?.replace(':', '')}`

  return (
    <div className={`${className} d-flex align-items-center  gap-1`}>
      <div className={`${isLabelHalfSize ? 'w-50' : 'w-25'}  text-end`}>
        {_label}
      </div>
      <div className={`${isLabelHalfSize ? 'w-50' : 'w-75'} ms-2 form-control`}>
        {children}
      </div>
    </div>
  )
}

export default LabelValue
