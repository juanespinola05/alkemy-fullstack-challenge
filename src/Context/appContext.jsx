import { useState, useEffect, createContext } from 'react'

const AppContext = createContext()
const localStorageField = 'TFinance'

const AppProvider = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function toggleModal () {
    setModal(!modal)
  }

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const userToken = window.localStorage.getItem(localStorageField)
    if (userToken) {
      const user = JSON.parse(userToken)
      setUser(user)
      setToken(user.token)
    }
  }, [])

  function saveUser (user) {
    window.localStorage.setItem(localStorageField, JSON.stringify({ token: user.token }))
    setUser(user)
    setToken(user.token)
  }

  function logout () {
    window.localStorage.removeItem(localStorageField)
    setUser(null)
    setToken(null)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        saveUser,
        logout,
        windowWidth,
        modal,
        toggleModal
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
