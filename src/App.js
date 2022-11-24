import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/routes/PrivateRoute'
import { HomePage } from './pages/HomePage'
import CoreLayout from './pages/Layout/layout'

import { Login } from './pages/Login'
import Other from './pages/Other'

function App() {
  return (
    <Routes>
      <Route element={<CoreLayout />}>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Navigate to='homepage' />} />
          <Route path='/other' element={<Other />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='*' element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Route>

      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
