import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'

import 'large-small-dynamic-viewport-units-polyfill'
import './styles/main.css'

import Home from './pages/home'
import { Toaster } from 'react-hot-toast'

const toastStyles: CSSProperties = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff',
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Toaster
      position='bottom-center'
      toastOptions={{
        style: toastStyles,
      }}
    />
  </React.StrictMode>
)
