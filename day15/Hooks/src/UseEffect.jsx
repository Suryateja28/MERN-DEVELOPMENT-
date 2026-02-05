import React, { useEffect } from 'react'

const UseEffect = () => {
//         first -> side-effect function
            // second -> clean-up funtion
            // third -> comma separated dep list
            // variation:1
            // runs on every render
        useEffect(() => {
        alert("I will run on each render")
        })
  return (
    <div>UseEffect
    </div>
  )
}

export default UseEffect