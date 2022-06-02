import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Dashboard } from '../../assets/svg/dashboard.svg'
import { ReactComponent as Menu } from '../../assets/svg/menu.svg'

const types = {
  logo: styles => (
    <Logo style={styles} />
  ),
  dashboard: styles => (
    <Dashboard style={styles} />
  ),
  menu: styles => (
    <Menu style={styles} />
  )
}

const Icon = ({ type, size, color }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`
  }

  if (color) styles.fill = color

  return (
    <div style={styles}>
      {types[type](styles)}
    </div>
  )
}

export { Icon }
