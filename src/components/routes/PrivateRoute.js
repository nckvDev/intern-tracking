import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const auth = sessionStorage.getItem('user')

  return auth ? <Outlet /> : <Navigate to='/login' />
}
