import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --color-white: #FFFFFF;
    --color-white-bg: #F4F3FA;
    --color-black: #000000;
    --main-color: #4C49ED;
    --main-color-lighter: #AFAEFE;
    --main-color-transparent: #E4E3FF;
    --main-color-darker: #141197;
    --color-gray: #A1A0BD;
    --color-gray-lighter: #CCCBD8;
    --color-gray-darker: #4e4e4f;
    --color-red: #D14F4F;
    --color-red-transparent: #F5DCDC
    --color-green: #6ED69E;
    --color-green-transparent: #DCF5E8;

    background-color: var(--main-color-transparent)
  }
`
