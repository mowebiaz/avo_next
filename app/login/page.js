'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { LoginForm } from './LoginForm/LoginForm'
import { login } from '../lib/firebase/auth/login'
import { UserMessage } from '../components/UserMessage/UserMessage'
import { IoAlertOutline, IoClose } from 'react-icons/io5'

export default function Login() {
  const [error, setError] = useState(null)
  const router = useRouter()
  const { user } = useAuth()

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

  if (user) {
    router.push('/admin')
  }

  return (
    <main>
      <h1>Connexion</h1>
      <UserMessage className={'message-alert'}>
        <div className="message-alert-icon">
          <IoAlertOutline />
        </div>
        <p>Cette page est privée. Seul l&apos;administrateur peut y accéder.</p>
      </UserMessage>
      <LoginForm onLogin={handleLogin} />
      {error && (
        <UserMessage className={'message-error'}>
          <div className="message-error-icon">
            <IoClose />
          </div>
          <p>{error.message}</p>
        </UserMessage>
      )}
    </main>
  )
}
