import { Icon } from '../'
import { Container } from './percentageStyles.js'

const types = {
  grown: {
    prefix: '+',
    color: 'var(--color-green)',
    bg: 'var(--color-green-transparent)',
    scaleY: '1'
  },
  down: {
    prefix: '-',
    color: 'var(--color-red)',
    bg: 'var(--color-red-transparent)',
    scaleY: '-1'
  }
}

const Percentage = ({ children, type }) => {
  return (
    <Container type={types[type]}>
      <Icon type='percentage' size='1.5em' color={types[type].color} />
      {types[type].prefix} {children}%
    </Container>
  )
}

export { Percentage }
