import { Link } from 'react-router-dom'
import { LinkItem } from './navLinksListStyles'

const NavLinksList = () => {
  return (
    <>
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
        <Link to='/my-account'>
          My account
        </Link>
      </LinkItem>
    </>
  )
}

export { NavLinksList }
