import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/routes/PrivateRoute'
import { PublicRoute } from './components/routes/PublicRoute'
import { HomePage } from './pages/HomePage'
import { Login } from './pages/Login'
import Other from './pages/Other'
import Web from './pages/Web'

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/other' element={<Other />} />
      </Route>
      <Route path='*' element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}

export default App
