import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UserDashboard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log("location", location)
  const { role_code, id } = useParams()
  const user = {
    name: 'Juan',
    id: "5"
  }
  return (
    <div>
      <div>
        UserDashboard
        <p>Código de rol: { role_code }</p>
        <p>Código de id: { id }</p>
        <p>path: { pathname }</p>
      </div>
      <button className='btn btn-primary' 
      onClick={()=>navigate(`/user/${user.id}/${user.name}/dashboard`)}>set user id</button>
    </div>
  )
}

export default UserDashboard
