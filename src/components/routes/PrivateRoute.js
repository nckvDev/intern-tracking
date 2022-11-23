import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const user = sessionStorage.getItem('user')
  return user ? true : false
}

export const PrivateRoute = () => {
  const auth = useAuth()
  console.log(auth)

  return auth || sessionStorage.user ? <Outlet /> : <Navigate to='/login' />
}
