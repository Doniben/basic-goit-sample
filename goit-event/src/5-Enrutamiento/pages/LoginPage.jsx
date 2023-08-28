import React, { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


const LoginPage = () => {
  const [ searchParams ] = useSearchParams()
  const userContextData = useContext(UserContext)
  console.log(userContextData)
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  const role = searchParams.get("role")
  return (
    <div>
      <h2>LoginPage</h2>
      <p>email: { email }</p>
      <p>password: { password }</p>
      <p>role: { role }</p>
      <hr />
      <p>contextname: { userContextData.name } </p>
      <p>contextid: { userContextData.id } </p>
      <p>contextrole: { userContextData.role }  </p>
    </div>
  )
}

export default LoginPage
