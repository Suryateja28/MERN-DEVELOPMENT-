import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) {
      alert('Invalid credentials')
      return
    }
    localStorage.setItem('auth', JSON.stringify({ email: user.email, name: user.name }))
    navigate('/dashboard')
  }

  return (
    <div className="form-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="btn" type="submit">Login</button>
          <Link to="/register" className="muted">Create account</Link>
        </div>
      </form>
    </div>
  )
}
