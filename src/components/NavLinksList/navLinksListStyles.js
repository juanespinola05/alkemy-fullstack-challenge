import styled from 'styled-components'

export const LinkItem = styled.li`
  a {
    display: block;
    height: 60px;
    padding: 20px;
    border-bottom: 1px solid var(--color-gray-lighter);
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    color: var(--color-gray-darker);
    font-weight: bold;
  }
  a:hover {
    color: var(--main-color);
    background-color: var(--main-color-transparent);
  }
`
