'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { AdminPriceTable } from './AdminPriceTable/AdminPriceTable'
import { AddWeekForm } from './AddWeekForm/AddWeekForm'
import { ButtonLogout } from './ButtonLogout/ButtonLogout'

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
      <main className="admin">
        <ButtonLogout />
        <h1>Admin</h1>
        <AdminPriceTable />
        <AddWeekForm />
      </main>
    )
  }
}
