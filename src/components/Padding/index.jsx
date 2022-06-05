import { Container } from './paddingStyles'

const Padding = ({ children, size }) => {
  return (
    <Container size={size}>
      {children}
    </Container>
  )
}

export { Padding }
