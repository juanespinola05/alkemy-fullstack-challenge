import { TextP } from './textStyles'

const Text = ({ children, color }) => {
  return (
    <TextP variant={color}>{children}</TextP>
  )
}

export { Text }
