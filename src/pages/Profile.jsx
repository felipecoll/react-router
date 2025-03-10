import React from 'react'
import { useAuth } from './auth'



const Profile = () => {
  const auth = useAuth()
  return (
    <>
      <h1>Mi perfil</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
    
  )
}

export default Profile