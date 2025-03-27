import { useState, useEffect } from 'react'
import './FunctionTimer.css'

const FunctionTimer = () => {
  const [message, setMessage] = useState('')
  let timeoutId = null

  // Function without promises ✅
  const startTimerWithoutPromise = (seconds) => {
    setMessage(`Waiting for ${seconds} seconds...`)
    timeoutId = setTimeout(() => {
      setMessage(`Timer finished after ${seconds} seconds`)
    }, seconds * 1000)
  }

  // 🚀 Clear Timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])
}

export default FunctionTimer
