import styled from 'styled-components'

export const List = styled.ul`
  display: ${({ type }) => type};
  gap: 10px;
`
export const LinkItem = styled.li`
  a {
    display: block;
    height: 60px;
    padding: 20px;
    border: 1px solid var(--color-gray-lighter);
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    color: var(--color-gray-darker);
    font-weight: bold;
  }
  a:hover {
    color: var(--color-main);
    background-color: var(--color-main-transparent);
  }
`
