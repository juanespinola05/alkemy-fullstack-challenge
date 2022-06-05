import {
  TotalContainer,
  Title,
  LastOpAmount,
  TotalInfo,
  ButtonsContainer,
  BallanceInt,
  BallanceDec,
  BallanceInfo
} from './totalBallanceStyles'
import { Button, Text } from '../'
import { Link } from 'react-router-dom'

const TotalBalance = ({ wallet, lastOperation }) => {
  const types = {
    income: {
      color: 'green',
      prefix: '+'
    },
    outflow: {
      color: 'red',
      prefix: '-'
    }
  }
  const operation = types[lastOperation?.type] || { color: 'green', prefix: '', amount: '0,00' }
  return (
    <TotalContainer>
      <TotalInfo>
        <Title>Total Ballance</Title>
        <LastOpAmount
          color={operation.color}
        >
          {operation.prefix} ${lastOperation?.amount || operation.amount}
        </LastOpAmount>
        <Text color='gray'>Last transaction</Text>
        <ButtonsContainer>
          <Button primary>May</Button>
          <Button>See all</Button>
        </ButtonsContainer>
      </TotalInfo>
      <BallanceInfo>
        <BallanceInt>${wallet}<BallanceDec>.00</BallanceDec></BallanceInt>
        <Text color='gray'>wallet amount</Text>
      </BallanceInfo>
    </TotalContainer>
  )
}

export { TotalBalance }
