import { useState } from 'react'
import { Register } from './Register'
import { Login } from './Login'

const Auth = () => {
  const [login, setLogin] = useState(true)

  return (
    <>
      {
        login
          ? <Login setLogin={setLogin} />
          : <Register setLogin={setLogin} />
      }
    </>
  )
}

export { Auth }
