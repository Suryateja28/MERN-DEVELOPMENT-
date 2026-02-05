import React, { useState } from 'react'

export default function LocationSelector({ onSelect }) {
  const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata']
  const [city, setCity] = useState(cities[0])

  function handleChange(e) {
    setCity(e.target.value)
    onSelect && onSelect(e.target.value)
  }

  return (
    <div>
      <label>Select city: </label>
      <select value={city} onChange={handleChange}>
        {cities.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
}
