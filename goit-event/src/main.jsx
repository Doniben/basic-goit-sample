import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './App'
import './index.css'
import RouteApp from './5-Enrutamiento/RouteApp'
import { UserProvider } from './context/UserProvider'
import { LazyApp } from './6. Lazy & Suspense/LazyApp'
import { CirclesWithBar } from 'react-loader-spinner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> 
      <UserProvider>
        <RouteApp />
      </UserProvider>
    </BrowserRouter> */}
    <LazyApp />
  </React.StrictMode>,
)