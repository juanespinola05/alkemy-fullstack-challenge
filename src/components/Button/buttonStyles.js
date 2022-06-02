import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 130px;
  height: 50px;
  border: ${({ primary }) => primary ? 'none' : '1px solid var(--main-color)'};
  border-radius: 30px;
  background-color: ${({ primary }) => primary ? 'var(--main-color)' : 'var(--color-white)'};
  font-weight: 600;
  font-size: 18px;
  color: ${({ primary }) => primary ? 'var(--color-white)' : 'var(--main-color)'};
  cursor: pointer;
`
