'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase/config'
import { useSessionStorage } from 'react-use'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isSignedIn, setIsSignedIn] = useSessionStorage("signedin", false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setIsSignedIn(true)
        setLoading(false)
      } else {
        setIsSignedIn(false)
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [setIsSignedIn])



  return (
    <AuthContext.Provider value={{user, isSignedIn, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
