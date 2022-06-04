import styled from 'styled-components'

export const Container = styled.div`
  width: 6em;
  height: 2.4em;
  border-radius: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  color: ${({ type }) => type.color};
  font-weight: 900;
  
  background-color: ${({ type }) => type.bg};
  
  span {
    transform: scaleY(${({ type }) => type.scaleY})
  }
`
