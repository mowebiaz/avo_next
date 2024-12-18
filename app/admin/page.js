'use client'

import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { logout } from '../lib/firebase/auth/logout'
import { useRouter } from 'next/navigation'

export default function Admin() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, user, router])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <main>
      <h1>Admin</h1>
      {user && (
        <div>
          <p>Connect  en tant que {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </main>
  )
}
