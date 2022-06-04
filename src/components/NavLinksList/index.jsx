import { Link } from 'react-router-dom'
import { LinkItem, List } from './navLinksListStyles'

const NavLinksList = ({ type }) => {
  return (
    <List type={type}>
      <LinkItem>
        <Link to='/'>
          Home
        </Link>
      </LinkItem>
      <LinkItem>
        <Link to='/operations'>
          Operations
        </Link>
      </LinkItem>
      <LinkItem>
        <Link to='/'>
          My account
        </Link>
      </LinkItem>
    </List>
  )
}

export { NavLinksList }
