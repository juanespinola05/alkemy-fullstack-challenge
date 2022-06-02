import { ButtonStyled } from './buttonStyles'

const Button = ({ children, handleClick, primary }) => {
  const props = {
    onClick: handleClick
  }
  props.primary = primary

  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}

export { Button }
