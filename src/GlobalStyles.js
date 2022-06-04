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
    font-family: 'Mulish', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --color-white: #FFFFFF;
    --color-white-bg: #F4F3FA;
    --color-black: #000000;
    --color-main: #4C49ED;
    --color-main-lighter: #AFAEFE;
    --color-main-transparent: #E4E3FF;
    --color-main-darker: #141197;
    --color-gray: #A1A0BD;
    --color-gray-lighter: #CCCBD8;
    --color-gray-darker: #4e4e4f;
    --color-red: #D14F4F;
    --color-red-transparent: #F5DCDC;
    --color-green: #6ED69E;
    --color-green-transparent: #DCF5E8;

    background-color: var(--color-main-transparent)
  }
`
const size = {
  mobileS: '320px',
  mobileM: '425px',
  mobileL: '590px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px'
}

export const devices = {
  mobileS: `min-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  laptop: `min-width: ${size.laptop}`,
  desktop: `min-width: ${size.desktop}`
}
