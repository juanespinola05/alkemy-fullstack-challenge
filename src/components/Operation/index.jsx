import { Icon } from '../'
import {
  Container,
  Image,
  Amount,
  Concept
} from './operationStyles'

const types = {
  income: {
    prefix: '+',
    color: 'var(--color-green)',
    bg: 'var(--color-green-transparent)',
    scaleY: '1'
  },
  outflow: {
    prefix: '-',
    color: 'var(--color-red)',
    bg: 'var(--color-red-transparent)',
    scaleY: '-1'
  }
}

const Operation = ({ concept = 'Operation', type, amount = 0 }) => {
  const selected = types[type]
  const amountString = selected.prefix + amount
  return (
    <Container>
      {console.log('asd')}
      <div>
        <Image type={selected}>
          <Icon type='arrow' size='30px' color={selected.color} />
        </Image>
        <div>
          <Concept>{concept}</Concept>
          <p>{type}</p>
        </div>
      </div>
      <Amount type={selected}>{amountString}</Amount>
    </Container>
  )
}

export { Operation }
