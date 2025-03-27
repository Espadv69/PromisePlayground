import { useState, useEffect } from 'react'
import './Functions.css'

const FunctionFetch = () => {
  const [message, setMessage] = useState('')
  let timeoutId = null

  // ❌ Function without promise
  const generateRandomNumberWithoutPromise = () => {
    setMessage('Generating random number without promise...')
    timeoutId = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1
      setMessage(`Random number without promise: ${randomNumber}`)
    }, 2000)
  }

  return (
    <section className="promises-container">
      <h1 className="title">Promise Playground 🎭</h1>
      <h4>Random Number 🎲</h4>

      <div className="buttons-container">
        <button
          className="action-btn"
          onClick={() => generateRandomNumberWithoutPromise()}
        >
          Without Promise
        </button>
        <button className="action-btn" onClick="">
          With Promise
        </button>
      </div>

      <div className="result-screen">
        {message || 'Press any button and wait'}
      </div>
    </section>
  )
}

export default FunctionFetch
