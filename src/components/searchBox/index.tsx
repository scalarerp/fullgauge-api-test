import { useGlobalStore } from '../../services/globalStore'

const SearchBox = () => {
  const { searchString } = useGlobalStore()
  return (
    <div className="form-label mb-3">
      Busca:
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
  )
}

export default SearchBox
