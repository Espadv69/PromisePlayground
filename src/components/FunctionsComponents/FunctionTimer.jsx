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

  // Function with promises ✅
  const startTimerWithPromise = (seconds) => {
    setMessage(`Waiting for ${seconds} seconds...`)

    new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(`Timer finished after ${seconds} seconds`)
      }, seconds * 1000)
    }).then((message) => setMessage(message))
  }

  // 🚀 Clear Timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="promises-container">
      <h1 className="title">Promise Playground 🎭</h1>
      <h4>Timer ⏲️</h4>

      <div className="buttons-container">
        <button
          className="action-btn"
          onClick={() => startTimerWithoutPromise(3)}
        >
          Without Promise
        </button>
        <button className="action-btn" onClick={() => startTimerWithPromise(3)}>
          With Promise
        </button>
      </div>

      <div className="result-screen">
        {message || 'Press any button and wait'}
      </div>
    </section>
  )
}

export default FunctionTimer
