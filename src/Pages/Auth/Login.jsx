import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Card, Padding, Input, Button, Subtitle, Text } from '../../components'
import { Container, StyledForm } from './authStyles'
import { login } from '../../Services/auth'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import { AppContext } from '../../Context/appContext'

const Login = ({ setLogin }) => {
  const { user, saveUser } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin (e) {
    e.preventDefault()
    try {
      const user = await login({ email, password })

      saveUser(user)
      setEmail('')
      setPassword('')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        width: '300px',
        title: 'Wrong credentials'
      })
    }
  }

  return (
    <>
      {user && <Navigate to='/' />}
      <Container>
        <Card>
          <Padding size='30px'>
            <Subtitle>Log in</Subtitle>
            <StyledForm onSubmit={handleLogin}>
              <div>
                <label htmlFor='email'>Email</label>
                <Input
                  name='email'
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <Input
                  name='password'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type='submit' primary>Log in</Button>
              <Text>
                Don't have an account?
                <Button onClick={() => setLogin(false)}>Sign up</Button>
              </Text>
            </StyledForm>
          </Padding>
        </Card>
      </Container>

    </>
  )
}

export { Login }
