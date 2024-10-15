import React, { useState, useEffect } from 'react'
import './home.css'

function Home() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date)
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiam = hours >= 12 ? "PM" : "AM"

    // when its midnight so its 0 (false) then return 12 
    hours = hours % 12 || 12

    let currentTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiam}`
    return currentTime
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default Home