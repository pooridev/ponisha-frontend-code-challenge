import React from 'react'
import ReactDOM from 'react-dom/client'

import 'large-small-dynamic-viewport-units-polyfill'
import './styles/main.css'

import Home from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
