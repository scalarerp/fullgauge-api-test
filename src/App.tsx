import { useState } from 'react'
import { testApi } from './api'

const App = () => {
  const [pass, setPass] = useState('test')
  const [url, setUrl] = useState(
    'https://fgserver-pro.sitrad.com/api/v1/instruments'
  )

  const handleSubmitTest = async () => {
    console.log(pass,url)
    const result = await testApi(url, pass)

    console.log(result)
  }
  return (
    <>
      <input
        id="pass"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        id="url"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button id="submit" type="button" onClick={handleSubmitTest}>
        Submit
      </button>
    </>
  )
}

export default App

