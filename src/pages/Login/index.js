import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container } from './login.style'

export const Login = () => {
  const navigate = useNavigate()

  const login = () => {
    sessionStorage.setItem('user', 'admin')
    navigate('/homepage')
  }

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      navigate('/')
    }

    sessionStorage.getItem('user') && navigate('/')
  }, [navigate])

  return (
    <Container>
      <Card>
        <h2>Welcome to login </h2>
        <button onClick={login}> Login</button>
      </Card>
    </Container>
  )
}
