import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Card, Padding, Input, Button, Subtitle, Text } from '../../components'
import { Container, StyledForm } from './registerStyles'
import { register } from '../../Services/auth'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import { AppContext } from '../../Context/appContext'

const Register = ({ setLogin }) => {
  const { user, saveUser } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  async function handleSignUp (e) {
    e.preventDefault()
    try {
      const user = await register({ email, password, name })

      saveUser(user)
      setEmail('')
      setPassword('')
      setName('')
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
      {user && <Navigate to='/home' />}
      <Container>
        <Card>
          <Padding size='30px'>
            <StyledForm onSubmit={handleSignUp}>
              <Subtitle>Create an account</Subtitle>
              <div>
                <label htmlFor='name'>Name</label>
                <Input
                  name='name'
                  type='text'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <Button type='submit' primary>Sign up</Button>
              <Text>
                I have an account
                <Button onClick={() => setLogin(true)}>Log in</Button>
              </Text>
            </StyledForm>
          </Padding>
        </Card>
      </Container>

    </>
  )
}

export { Register }
