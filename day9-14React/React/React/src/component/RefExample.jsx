import { useEffect, useRef, useState } from 'react'

const RefExample = () => {
  const inputRef = useRef(null)
  const countChar = useRef(0)
  const [userTypeVal, setUserData] = useState('')

  useEffect(() => {
    countChar.current += 1
  })

  return (
    <div>
      <input
        ref={inputRef}
        value={userTypeVal}
        onChange={(e) => setUserData(e.target.value)}
      />
      <p>Render count: {countChar.current}</p>
    </div>
  )
}

export default RefExample
