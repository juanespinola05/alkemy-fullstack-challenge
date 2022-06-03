import styled from 'styled-components'
import totalBg from '../../assets/wallet.png'
import { devices } from '../../GlobalStyles'

export const TotalContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template: 2fr 1fr/ 1fr;
  place-items: center;
  font-size: 16px;
  text-align: center;

  @media (min-width: 590px) {
    grid-template: 1fr / 1.5fr 1fr;
    text-align: left;
  }
  @media (max-width: 650px) {
   background-position: 150%; 
  }
  @media (${devices.laptop}) or (max-width: 650px) {
    background-position: 140%;
  }
  @media (${devices.desktop}) {
    background-position: right;
  }
`
export const TotalInfo = styled.div`
  padding-left: 15px;
  font-size: 18px;
  @media (${devices.mobileL}) {
    font-size: 20px;
  }
  @media (${devices.tablet}) {
    font-size: 20px;
  }
  @media (${devices.laptop}) {
    font-size: 18px;
  }
`
export const Title = styled.h2`
  font-weight: 900;
  font-size: 1.6em;
`
export const LastOpAmount = styled.p`
  margin-top: 0.4em;
  color: ${({ color }) => color === 'red' ? 'var(--color-red)' : 'var(--color-green)'};
  font-size: 1.6em;
  font-weight: 900;
`
export const LastOp = styled.p`
  margin: 0px 0 1em;
  font-size: 1.3em;
  font-weight: 700;
  color: var(--color-gray);
`
export const ButtonsContainer = styled.div`
  font-size: 25px;
  display: flex;
  gap: 10px;
`
export const BallanceInfo = styled.div`
  place-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: 0 50%;
  font-size: 20px;
  @media (${devices.mobileL}) {
    padding-right: 20px;
    background-image: url(${totalBg});
    align-items: end;
    justify-content: center;
  }
`
export const BallanceInt = styled.p`
  color: var(--main-color);
  font-size:  2em;
  font-weight: 900;
  @media (${devices.mobileL}) {
    color: var(--color-white);
  }
`
export const BallanceDec = styled.span`
  font-size: calc(1.1em / 2);
  color: var(--color-gray-lighter);
`
export const WalletText = styled.span`
  font-size: 1.1em;
  font-weight: 700;
  color: var(--color-gray-lighter)
`
