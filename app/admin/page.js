'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { logout } from '../lib/firebase/auth/logout'
import { AdminPriceTable} from './AdminPriceTable/AdminPriceTable'


export default function Admin() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login')
    }
  }, [loading, user, router])

  if (loading) {
    return <p>Loading...</p>
  }

  if (user) {
    return (
      <main>
        <h1>Admin</h1>
        <>
          <button onClick={logout}>Logout</button>
          <div>
            <p>Connect en tant que {user.email}</p>
            {/* <AdminPriceTable /> */}
          </div>
        </>
      </main>
    )
  }
}
