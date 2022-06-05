import { ButtonStyled } from './buttonStyles'

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}

export { Button }
