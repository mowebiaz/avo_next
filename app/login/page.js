'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { LoginForm } from './LoginForm/LoginForm'
import { login } from '../lib/firebase/auth/login'

export default function Login() {
  const [error, setError] = useState(null)
  const router = useRouter()
  const { user } = useAuth()

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
      setError(error.message)
    }
  }

  if (user) {
    router.push('/admin')
  }

  return (
    <main>
      <h1>Connexion</h1>
      <LoginForm onLogin={handleLogin} />
      {error && <p>{error.message}</p>}
      {user && <p>Connecté en tant que {user.email}</p>}
    </main>
  )
}
