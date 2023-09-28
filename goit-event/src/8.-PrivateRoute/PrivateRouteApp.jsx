import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { Navbar } from '../components/Navbar'


export const PrivateRouteApp = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <AppRouter />
    </BrowserRouter>
  )
}
