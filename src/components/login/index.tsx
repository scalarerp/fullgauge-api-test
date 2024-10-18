import { useGlobalStore } from '../../services/globalStore'

const Login = () => {
  const { user, pass, baseUrl } = useGlobalStore()
  return (
    <>
      <div className="d-flex gap-3 ">
        <div className="form-label">
          User
          <input
            id="user"
            className="form-control"
            value={user}
            onChange={(e) => useGlobalStore.setState({ user: e.target.value })}
          />
        </div>

        <div className="form-label">
          Password
          <input
            id="pass"
            type="password"
            className="form-control"
            value={pass}
            onChange={(e) => useGlobalStore.setState({ pass: e.target.value })}
          />
        </div>
      </div>
      <div className="form-label">
        URL
        <input
          id="baseUrl"
          type="url"
          className="form-control"
          value={baseUrl}
          onChange={(e) => {
            useGlobalStore.setState({ baseUrl: e.target.value })
          }}
        />
      </div>
      <button
        id="submit"
        className="btn btn-primary"
        type="button"
        onClick={() => {
          useGlobalStore.setState({ isLogged: true })
        }}
      >
        Login
      </button>
    </>
  )
}

export default Login
