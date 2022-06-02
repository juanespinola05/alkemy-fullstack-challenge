import styled from 'styled-components'

export const TotalContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template: 1fr / 1.5fr 1fr;
  align-items: center;
  place-items: center;
`
export const TotalInfo = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 10px; */
`
export const Title = styled.h2`
  font-weight: 900;
  font-size: 25px;
`
export const LastOpAmount = styled.p`
  margin-top: 10px;
  color: ${({ color }) => color === 'red' ? 'var(--color-red)' : 'var(--color-green)'};
  font-size: 25px;
  font-weight: 900;
`
export const LastOp = styled.p`
  margin: 0px 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-gray);
`
