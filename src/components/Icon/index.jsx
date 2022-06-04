import { IconContainer } from './styles'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Dashboard } from '../../assets/svg/dashboard.svg'
import { ReactComponent as Menu } from '../../assets/svg/menu.svg'
import { ReactComponent as Percentage } from '../../assets/svg/percentage.svg'

const types = {
  logo: styles => (
    <Logo style={styles} />
  ),
  dashboard: styles => (
    <Dashboard style={styles} />
  ),
  menu: styles => (
    <Menu style={styles} />
  ),
  percentage: styles => (
    <Percentage style={styles} />
  )
}

const Icon = ({ type, size, color }) => {
  const styles = {
    width: `${size}`,
    height: `${size}`
  }

  if (color) styles.fill = color

  return (
    <IconContainer style={styles}>
      {types[type](styles)}
    </IconContainer>
  )
}

export { Icon }
