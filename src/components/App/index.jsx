import { Nav } from '../'
import { Routes, Route } from 'react-router-dom'
import { AppContainer } from './appStyles'
import { useEffect, useState } from 'react'

function App () {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return (
    <AppContainer className='app'>

      {
        windowWidth >= 480
          ? <Nav.Desktop />
          : <Nav.Mobile />
      }

      <main>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/operations' element={<h1>Operations</h1>} />
          <Route path='/my-account' element={<h1>My Account</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
        </Routes>
      </main>
    </AppContainer>
  )
}

export { App }
