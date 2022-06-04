import styled from 'styled-components'
import { devices } from '../../GlobalStyles'

export const PriceInt = styled.p`
  color: var(--color-black);
  font-size: 25px;
  font-weight: 900;
  @media (${devices.mobileM}) {
    font-size: 32px;
  }
`
export const PriceDec = styled.span`
  color: var(--color-main-lighter);
  font-size: .6em;
`
