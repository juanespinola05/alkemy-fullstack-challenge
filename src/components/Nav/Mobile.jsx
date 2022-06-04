import { Icon, NavLinksList } from '../'
import { Header, MenuButton, HeaderContainer } from './navStyles'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const linksListVariants = {
  closed: { height: 0 },
  opened: { height: 180 }
}

const Mobile = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <HeaderContainer>
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
              <NavLinksList type='block' />
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </HeaderContainer>
  )
}

export { Mobile }
