import React from 'react'
import { useNavigate } from 'react-router-dom'

const Other = () => {
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div>
      Other
      <button onClick={logout}> Logout</button>
    </div>
  )
}

export default Other
