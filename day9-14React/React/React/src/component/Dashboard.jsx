import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocationSelector from './LocationSelector'
import SeatSelector from './SeatSelector'

const SAMPLE = [
  { id: 'm1', title: 'Movie A', poster: 'https://via.placeholder.com/320x460?text=Movie+A' },
  { id: 'm2', title: 'Movie B', poster: 'https://via.placeholder.com/320x460?text=Movie+B' },
  { id: 'm3', title: 'Movie C', poster: 'https://via.placeholder.com/320x460?text=Movie+C' },
  { id: 'm4', title: 'Movie D', poster: 'https://via.placeholder.com/320x460?text=Movie+D' }
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [city, setCity] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [bookings, setBookings] = useState(() => JSON.parse(localStorage.getItem('bookings') || '[]'))

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('auth') || 'null')
    if (!a) navigate('/login')
    else setUser(a)
  }, [navigate])

  function handleLogout() {
    localStorage.removeItem('auth')
    navigate('/login')
  }

  function handleCitySelect(c) {
    setCity(c)
    setSelectedMovie(null)
  }

  function handleBookClick(movie) {
    setSelectedMovie({ ...movie })
  }

  function handleConfirm(seats) {
    const b = { movieId: selectedMovie.id, city, seats, user: user.email, time: new Date().toISOString() }
    const next = [...bookings, b]
    setBookings(next)
    localStorage.setItem('bookings', JSON.stringify(next))
    alert('Booking confirmed: ' + seats.length + ' seats for ' + selectedMovie.title)
    setSelectedMovie(null)
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Dashboard</h2>
        <div>
          {user && <span className="muted">Hello, {user.name}</span>}&nbsp;&nbsp;
          <button className="btn secondary" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <LocationSelector onSelect={handleCitySelect} />

      {!city && <div className="muted">Select a city to see shows.</div>}

      {city && (
        <>
          <h3 style={{marginTop:12}}>Shows in {city}</h3>
          <div className="movie-grid">
            {SAMPLE.map(m => (
              <div key={m.id} className="movie-card">
                <img src={m.poster} alt={m.title} className="poster" />
                <div className="card-body">
                  <h4>{m.title}</h4>
                  <p className="muted">Timings: 10:00 AM, 1:30 PM, 6:00 PM</p>
                  <div style={{display:'flex',gap:8}}>
                    <button className="btn" onClick={() => handleBookClick(m)}>Book</button>
                    <button className="btn secondary" onClick={() => alert('Details coming soon')}>Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedMovie && (
            <div style={{maxWidth:560, margin:'1rem auto'}}>
              <SeatSelector movie={selectedMovie} onConfirm={handleConfirm} taken={[] } />
              <div style={{textAlign:'center', marginTop:8}}>
                <button className="btn secondary" onClick={() => setSelectedMovie(null)}>Cancel</button>
              </div>
            </div>
          )}

          {bookings.length > 0 && (
            <div style={{marginTop:16}}>
              <h4>Your bookings</h4>
              <ul>
                {bookings.map((b,i) => (
                  <li key={i}>{b.movieId} — {b.seats.length} seats — {new Date(b.time).toLocaleString()}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  )
}
