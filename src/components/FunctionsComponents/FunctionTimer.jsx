import { useState, useEffect } from 'react'
import './Functions.css'

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

  return (
    <section className="promises-container">
      <h1 className="title">Promise Playground 🎭</h1>

      <div className="buttons-container">
        <button
          className="action-btn"
          onClick={() => startTimerWithoutPromise(3)}
        >
          Without Promise
        </button>
      </div>

      <div className="result-screen">
        {message || 'Press any button and wait'}
      </div>
    </section>
  )
}

export default FunctionTimer
