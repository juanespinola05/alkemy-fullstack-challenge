import {
  TotalContainer,
  Title,
  LastOpAmount,
  LastOp,
  TotalInfo,
  ButtonsContainer,
  BallanceInt,
  BallanceDec,
  BallanceInfo,
  WalletText
} from './totalBallanceStyles'
import { Button } from '../'
import { Link } from 'react-router-dom'

const TotalBalance = () => {
  return (
    <TotalContainer>
      <TotalInfo>
        <Title>Total Ballance</Title>
        <LastOpAmount color='green'>+ $28,55</LastOpAmount>
        <LastOp>Last transaction</LastOp>
        <ButtonsContainer>
          <Button primary>July</Button>
          <Link to='/operations'>
            <Button>See all</Button>
          </Link>
        </ButtonsContainer>
      </TotalInfo>
      <BallanceInfo>
        <BallanceInt>$55.289<BallanceDec>.58</BallanceDec></BallanceInt>
        <WalletText>wallets amount</WalletText>
      </BallanceInfo>
    </TotalContainer>
  )
}

export { TotalBalance }
