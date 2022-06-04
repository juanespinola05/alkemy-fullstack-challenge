import styled from 'styled-components'

const variants = {
  black: 'var(--color-black)',
  gray: 'var(--color-gray)'
}

export const SubtitleH2 = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: ${({ variant }) => variants[variant] ?? variants.black};
`
