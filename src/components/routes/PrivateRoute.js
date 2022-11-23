import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const user = localStorage.getItem('user')
  return user ? true : false
}

export const PrivateRoute = () => {
  const auth = useAuth()
  console.log(auth)

  return auth ? <Outlet /> : <Navigate to='/login' />
}
