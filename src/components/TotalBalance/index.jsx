import { TotalContainer, Title, LastOpAmount, LastOp, TotalInfo } from './totalBallanceStyles'
import { Button } from '../'

const TotalBalance = () => {
  return (
    <TotalContainer>
      <TotalInfo>
        <Title>Total Ballance</Title>
        <LastOpAmount color='green'>+ $28,55</LastOpAmount>
        <LastOp>Last transaction</LastOp>
        <div>
          <Button primary>July</Button>
          <Button>See all</Button>
        </div>
      </TotalInfo>
      <div>
        <p>$ 200<span>.58</span></p>
        <p>wallets amount</p>
      </div>
    </TotalContainer>
  )
}

export { TotalBalance }
