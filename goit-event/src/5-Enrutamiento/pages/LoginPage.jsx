import React from 'react'
import { useSearchParams } from 'react-router-dom'

const LoginPage = () => {
  const [ searchParams ] = useSearchParams()
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  const role = searchParams.get("role")
  return (
    <div>
      <h2>LoginPage</h2>
      <p>email: { email }</p>
      <p>password: { password }</p>
      <p>role: { role }</p>
    </div>
  )
}

export default LoginPage
