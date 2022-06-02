import { CardContainer } from './cardStyles'

const Card = ({ variant, children, area }) => {
  return (
    <CardContainer variant={variant} area={area}>
      {children}
    </CardContainer>
  )
}

export { Card }
