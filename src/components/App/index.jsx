import {
  Nav,
  Card,
  TotalBalance,
  Subtitle,
  Price,
  SmallCardWrapper,
  Percentage,
  Operation,
  Chart
} from '../'
// import { Routes, Route } from 'react-router-dom'
import { AppContainer, Padding } from './appStyles'
import { useEffect, useState } from 'react'

function App () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
        windowWidth < 1200 && <Nav.Mobile />
      }
      <AppContainer className='app'>
        {
        windowWidth >= 1200 &&
          <Card variant='mid' area='nav'>
            <Padding size='25px 20px'>
              <Subtitle type='main'>
                <b>
                  Welcome, Juan Sebastian!
                </b>
              </Subtitle>
              <br />
              <Nav.Desktop />
            </Padding>
          </Card>
        }

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
        <Card variant='big' area='chart'>
          <Padding size='15px 20px'>
            <Subtitle type='black'>Spending This Month</Subtitle>
            <Chart />
          </Padding>
        </Card>
        <Card variant='big' area='operations'>
          <Padding size='20px'>
            <Subtitle type='black'>Latest Transactions</Subtitle>
            <ul>
              <Operation type='income' amount='312.13' />
              <Operation type='outflow' amount='3552.56' />
              <Operation type='outflow' amount='822.03' />
              <Operation type='income' amount='260.00' />
              <Operation type='income' amount='2360.00' />
            </ul>
          </Padding>
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
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export { App }
