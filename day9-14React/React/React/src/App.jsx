import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Home from './component/Home'

function App() {
  return (
    <BrowserRouter>
      <nav className="topnav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
