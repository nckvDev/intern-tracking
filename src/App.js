import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/routes/PrivateRoute'
import { PublicRoute } from './components/routes/PublicRoute'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import Other from './pages/Other'
import Web from './pages/Web'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Navigate to='other' />} />
        <Route path='/other' element={<Other />} />
        <Route path='/homepage' element={<HomePage />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='*' element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}

export default App
