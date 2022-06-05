import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import {
  Card,
  Chart,
  Operation,
  Percentage,
  Price,
  SmallCardWrapper,
  Subtitle,
  TotalBalance,
  Padding,
  Button,
  Modal
} from '../../components'
import { AppContext } from '../../Context/appContext'
import { DataContext } from '../../Context/dataContext'
import { AppContainer } from './homeStyles'

const HomePage = () => {
  const { logout, token, modal, toggleModal } = useContext(AppContext)
  const [balanceData, setBalanceData] = useState({
    total_balance: '0',
    total_income: '0',
    total_outflow: '0',
    wallet_amount: '0'
  })
  const {
    operations,
    getOperations,
    month,
    year
  } = useContext(DataContext)

  async function getBalanceData (path) {
    const { data } = await axios.get(path, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    setBalanceData(data)
  }

  useEffect(() => {
    getOperations(`api/operations/${year}/${month}`)
    getBalanceData(`api/wallet/all/${year}/${month}`)
  }, [])

  return (
    <>
      <AppContainer className='app'>
        <Card variant='mid' area='nav'>
          <Padding size='25px'>
            <Subtitle type='main'>
              <b>
                Welcome, Juan Espinola!
              </b>
            </Subtitle>
            <br />
            <Button onClick={toggleModal}>Create operation</Button>
            {
              modal && <Modal />
            }
            <br />
            <br />
            <Button onClick={logout}>logout</Button>
          </Padding>
        </Card>

        <Card variant='mid' area='total'>
          <TotalBalance
            lastOperation={operations && operations[operations.length - 1]}
            wallet={balanceData.wallet_amount + balanceData.total_balance}
          />
        </Card>

        <Card variant='small' area='small1'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total income</Subtitle>
              <Price>
                {balanceData.total_income}
              </Price>
              <Percentage type='grown'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>

        <Card variant='small' area='small2'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total outflow</Subtitle>
              <Price>
                {balanceData.total_outflow}
              </Price>
              <Percentage type='down'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>

        <Card variant='small' area='small3'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Month Ballance</Subtitle>
              <Price>
                {balanceData.total_balance}
              </Price>
              <Percentage type='grown'>10</Percentage>
            </SmallCardWrapper>
          </Padding>
        </Card>

        <Card variant='small' area='small4'>
          <Padding size='15px 20px'>
            <SmallCardWrapper>
              <Subtitle type='gray'>Total outflow</Subtitle>
              <Price>
                {balanceData.total_outflow}
              </Price>
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
            <Subtitle type='black'>May Transactions</Subtitle>
            <ul>
              {
                !operations?.length &&
                  <Subtitle>No operations for this month!</Subtitle>
              }
              {
                operations?.map(op => (
                  <Operation
                    key={op.id}
                    type={op.type}
                    amount={op.amount}
                    concept={op.concept}
                  />
                ))
              }
            </ul>
          </Padding>
        </Card>
      </AppContainer>
    </>
  )
}

export { HomePage }
