import { useGlobalStore } from '../../services/globalStore'

const SearchBox = () => {
  const { searchString, alarmsDays } = useGlobalStore()
  return (
    <div className="d-flex justify-content-between ">
      <div className="form-label mb-3 w-75">
        Filter:
        <input
          type="search"
          className="form-control"
          value={searchString}
          onChange={(e) =>
            useGlobalStore.setState({ searchString: e.target.value })
          }
          onFocus={() => useGlobalStore.setState({ searchString: '' })}
        />
      </div>
      <div className="form-label mb-3">
        Alarms retroactive days:
        <input
          type="number"
          className="form-control"
          value={alarmsDays}
          onChange={(e) =>
            useGlobalStore.setState({ alarmsDays: Number(e.target.value) })
          }
        />
      </div>
    </div>
  )
}

export default SearchBox
