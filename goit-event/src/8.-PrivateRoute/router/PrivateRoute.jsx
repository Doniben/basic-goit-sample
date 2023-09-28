import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children, auth}) => {
    console.log("auth:", auth)
  return auth ? children : <Navigate to='/redirected-page' />
}