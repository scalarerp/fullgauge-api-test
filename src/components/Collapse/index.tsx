import './style.css'
import { useEffect, useState } from 'react'
interface Props {
  show: boolean
  children: React.ReactNode
}

const Collapse = (props: Props) => {
  const { show, children } = props
  const [render, setRender] = useState(show)
  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  return !render ? (
    <></>
  ) : (
    <div
      style={{
        animation: `${show ? 'open' : 'close'} 0.3s ease-in-out`,
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  )
}

export default Collapse
