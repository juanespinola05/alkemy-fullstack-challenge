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

const TotalBalance = () => {
  return (
    <TotalContainer>
      <TotalInfo>
        <Title>Total Ballance</Title>
        <LastOpAmount color='green'>+ $28,55</LastOpAmount>
        <Text color='gray'>Last transaction</Text>
        <ButtonsContainer>
          <Button primary>July</Button>
          <Link to='/operations'>
            <Button>See all</Button>
          </Link>
        </ButtonsContainer>
      </TotalInfo>
      <BallanceInfo>
        <BallanceInt>$55.289<BallanceDec>.58</BallanceDec></BallanceInt>
        <Text color='gray'>wallets amount</Text>
      </BallanceInfo>
    </TotalContainer>
  )
}

export { TotalBalance }
