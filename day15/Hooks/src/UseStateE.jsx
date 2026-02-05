import React, { useState } from 'react'

function UseStateE() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(c => c + 1)
  }

  return (
    <div>
      <h2>useState Example</h2>
      <button onClick={increment}>
        Click Me
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default UseStateE
