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

  // ✅ Function with promise
  const generateRandomNumberWithPromise = () => {
    setMessage('Generating random number with promise...')

    new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        resolve(`Random number with promise: ${randomNumber}`)
      }, 2000)
    }).then((message) => setMessage(message))
  }

  // 🚀 Clear Timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="promises-container">
      <h1 className="title">Promise Playground 🎭</h1>
      <h4>Random Number 🎲</h4>

      <div className="buttons-container">
        <button
          className="action-btn"
          onClick={generateRandomNumberWithoutPromise}
        >
          Without Promise
        </button>
        <button
          className="action-btn"
          onClick={generateRandomNumberWithPromise}
        >
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
