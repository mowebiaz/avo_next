'use client'

import { use, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { logout } from '../lib/firebase/auth/logout'
import { AdminPriceTable} from './AdminPriceTable/AdminPriceTable'
import { AddWeekForm } from './AddWeekForm/AddWeekForm'


export default function Admin() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const formRef = useRef(null)

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login')
    }
  }, [loading, user, router])

  if (loading) {
    return <p>Loading...</p>
  }

  const handleClick = () => {
    formRef.current.style.display = 'flex'
  }

  if (user) {
    return (
      <main>
        <h1>Admin</h1>
        <>
          <button onClick={logout}>Logout</button>
            <AdminPriceTable />
          <div>
            <button onClick={handleClick}>Ajouter une semaine</button>
          </div>
          <div ref={formRef} className='div-form' style={{ display: 'none' }}>
            <AddWeekForm />
          </div>
        </>
      </main>
    )
  }
}
