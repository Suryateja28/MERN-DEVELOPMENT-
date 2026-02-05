import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(u => u.email === email)) {
      alert('User already exists')
      return
    }
    users.push({ name, email, password })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registered — please login')
    navigate('/login')
  }

  return (
    <div className="form-card">
      <h2>Create account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="btn" type="submit">Register</button>
          <Link to="/login" className="muted">Already have account?</Link>
        </div>
      </form>
    </div>
  )
}
