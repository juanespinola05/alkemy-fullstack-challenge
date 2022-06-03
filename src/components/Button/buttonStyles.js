import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 6.1em;
  height: 2.5em;
  border: ${({ primary }) => primary ? 'none' : '1px solid var(--main-color)'};
  border-radius: 50px;
  background-color: ${({ primary }) => primary ? 'var(--main-color)' : 'var(--color-white)'};
  font-weight: 600;
  font-size: 0.9em;
  color: ${({ primary }) => primary ? 'var(--color-white)' : 'var(--main-color)'};
  cursor: pointer;
`
