import styled from 'styled-components'

const variants = {
  small: { height: '200px' },
  mid: { height: '400px' },
  big: { height: '600px' }
}

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: var(--color-white);
  grid-area: ${({ area }) => area};
  height: ${({ variant }) => variants[variant]};
  overflow: hidden;
`
