import { useGlobalStore } from '../../services/globalStore'

const ApiStatusCount = ({ resultsQty }: { resultsQty: number }) => {
  const { panel } = useGlobalStore()
  return (
    <div>
      <div className="d-flex justify-content-between mb-2 ms-3 me-5">
        <div>
          {panel}: {resultsQty}
        </div>
      </div>
    </div>
  )
}

export default ApiStatusCount
