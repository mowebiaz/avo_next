'use client'

import { useState } from 'react'
import './LoginForm.scss'

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
  }

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete='email'
      />
      </div>
      <div>
      <label htmlFor="password">Mot de passe:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete='current-password'
      />
      {/* mdp oublié ? */}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}
