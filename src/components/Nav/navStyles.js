import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  border-bottom: 1px solid var(--color-gray-lighter);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
`
export const MenuButton = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
