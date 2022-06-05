import { Background, StyledModal } from './modalStyles'
import { Card, Padding, Menu } from '../'

const Modal = () => {
  return (
    <Background>
      <StyledModal>
        <Card>
          <Padding size='10px 20px'>
            {/* menu here is temporal */}
            <Menu />
          </Padding>
        </Card>
      </StyledModal>
    </Background>
  )
}

export { Modal }
