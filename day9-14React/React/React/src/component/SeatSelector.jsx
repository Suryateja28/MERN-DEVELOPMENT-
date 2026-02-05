import React, { useState } from 'react'

export default function SeatSelector({ taken = [], onConfirm, movie }) {
  const rows = 5
  const cols = 8
  const total = rows * cols
  const [selected, setSelected] = useState([])

  function toggle(i) {
    if (taken.includes(i)) return
    setSelected(s => (s.includes(i) ? s.filter(x => x !== i) : [...s, i]))
  }

  function confirm() {
    onConfirm && onConfirm(selected)
    setSelected([])
  }

  return (
    <div>
      <div style={{textAlign:'center'}}><strong>{movie.title}</strong></div>
      <div className="seat-grid">
        {Array.from({ length: total }).map((_, idx) => {
          const takenCls = taken.includes(idx) ? 'taken' : ''
          const sel = selected.includes(idx) ? 'selected' : ''
          return (
            <div key={idx} className={`seat ${takenCls} ${sel}`} onClick={() => toggle(idx)}>{idx+1}</div>
          )
        })}
      </div>
      <div className="selected-info">
        <div className="muted">Selected: {selected.length} seats</div>
        <div style={{marginTop:8}}>
          <button className="btn" onClick={confirm} disabled={selected.length===0}>Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}
