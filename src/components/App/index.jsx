import { Nav } from '../'
import { Routes, Route, Link } from 'react-router-dom'
import { AppContainer, LinkItem } from './styles'

function App () {
  return (
    <AppContainer className='app'>
      <Nav.Mobile>
        <LinkItem>
          <Link to='/'>
            Home
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to='/operations'>
            Operations
          </Link>
        </LinkItem>
        <LinkItem>
          <Link to='/my-account'>
            My account
          </Link>
        </LinkItem>
      </Nav.Mobile>
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
