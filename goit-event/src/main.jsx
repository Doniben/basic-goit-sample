import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './App'
import './index.css'
import RouteApp from './5-Enrutamiento/RouteApp'
import { UserProvider } from './context/UserProvider'
import { LazyApp } from './6. Lazy & Suspense/LazyApp'
import { CirclesWithBar } from 'react-loader-spinner'
import { TaskApp } from './6.-useReducer/TaskApp'
import { TaskProvider } from './6.-useReducer/context/TaskProvider'
import { CounterReduxApp } from './CounterReduxApp'
import { Provider } from 'react-redux'
import { store } from './store'
import { PokemonApp } from './7.-Thunks'
import { PrivateRouteApp } from './8.-PrivateRoute/PrivateRouteApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* {<CounterReduxApp />} */}
        <PrivateRouteApp />
    </Provider>
  </React.StrictMode>,
)