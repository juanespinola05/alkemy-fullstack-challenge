import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components'
import { GlobalStyle } from './GlobalStyles'
import { AppProvider } from './Context/appContext'
import { DataProvider } from './Context/dataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <DataProvider>
        <GlobalStyle />
        <App />
      </DataProvider>
    </AppProvider>
  </BrowserRouter>
)
