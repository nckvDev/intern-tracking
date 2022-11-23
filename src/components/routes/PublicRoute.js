import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoute = () => {
  const user = localStorage.getItem('user')

  return user ? <Navigate to='/' /> : <Outlet />
}
