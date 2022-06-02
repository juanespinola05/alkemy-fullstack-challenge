import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
)
