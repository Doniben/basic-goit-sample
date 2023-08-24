import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './App'
import './index.css'
import RouteApp from './5-Enrutamiento/RouteApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Componente de nivel superior(Higher order component) */}
      <RouteApp />
    </BrowserRouter>
  </React.StrictMode>,
)