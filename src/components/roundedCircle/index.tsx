function RoundedCircle({ bgColor }: { bgColor: 'red' | 'green' | 'blue' }) {
  return (
    <span
      style={{ backgroundColor: `var(--bg-${bgColor})` }}
      className={`translate-middle p-2 rounded-circle`}
    >
      <span className="visually-hidden">---</span>
    </span>
  )
}

export default RoundedCircle
