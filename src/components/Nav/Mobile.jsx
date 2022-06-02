import { Icon, NavLinksList } from '../'
import { Header, MenuButton } from './navStyles'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const linksListVariants = {
  closed: { height: 0 },
  opened: { height: 180 }
}

const Mobile = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div>
      <Header>
        <div>
          <Icon type='logo' size='45' />
        </div>
        <div>
          <MenuButton onClick={() => setMenuOpened(!menuOpened)}>
            <Icon type='menu' size='40' color='#a1a0bd' />
          </MenuButton>
        </div>
      </Header>
      <nav>
        <AnimatePresence>
          {menuOpened && (
            <motion.ul
              style={{ overflow: 'hidden' }}
              initial='closed'
              animate='opened'
              exit='closed'
              variants={linksListVariants}
            >
              <NavLinksList />
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}

export { Mobile }
