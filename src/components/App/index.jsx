import {
  Nav,
  Card,
  TotalBalance,
  Subtitle,
  Price,
  SmallCardWrapper,
  Percentage
} from '../'
// import { Routes, Route } from 'react-router-dom'
import { AppContainer, Padding } from './appStyles'
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
    <>
      {
        windowWidth >= 2000
          ? <Nav.Desktop />
          : <Nav.Mobile />
      }
      <AppContainer className='app'>

        <Card variant='mid' area='total'>
          <TotalBalance />
        </Card>
        <Card variant='small' area='small1'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total income</Subtitle>
              <Price>200.03</Price>
              <Percentage type='grown'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>
        <Card variant='small' area='small2'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total outflow</Subtitle>
              <Price>153</Price>
              <Percentage type='down'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>
        <Card variant='small' area='small3'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Month Ballance</Subtitle>
              <Price>400.12</Price>
              <Percentage type='grown'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>
        <Card variant='small' area='small4'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total outflow</Subtitle>
              <Price>153</Price>
              <Percentage type='down'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>
        <Card variant='mid' area='form'>
          <h3>form</h3>
        </Card>
        <Card variant='big' area='grafic'>
          <h3>grafic</h3>
        </Card>
        <Card variant='big' area='operations'>
          <h3>operations</h3>
        </Card>

        {/* <main>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/operations' element={<h1>Operations</h1>} />
          <Route path='/my-account' element={<h1>My Account</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/register' element={<h1>Register</h1>} />
          </Routes>
        </main> */}
      </AppContainer>
    </>
  )
}

export { App }
