import styled from 'styled-components'

const variants = {
  black: 'var(--color-black)',
  gray: 'var(--color-gray)'
}

export const TextP = styled.p`
  font-weight: 700;
  font-size: 1.1em;
  color: ${({ variant }) => variants[variant] ?? variants.black};
`
