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

      <section className="explanation-container">
        <h2 className="explanation-title">
          Understanding Random Number Generation: Promise vs Non-Promise
        </h2>
        <p className="explanation-text">
          In JavaScript, random numbers can be generated synchronously or
          asynchronously. Using <code>setTimeout</code>, we can introduce a
          delay before updating the state. However, wrapping this inside a{' '}
          <code>Promise</code> allows for better control over asynchronous
          execution.
        </p>

        <div className="code-section">
          <h3 className="code-title">📌 Without Promise</h3>
          <p className="code-description">
            This function directly uses <code>setTimeout</code> to generate a
            random number after 2 seconds and update the state. The UI is
            updated when the timeout completes.
          </p>
          <img
            className="code-snippet-img"
            src="/images/random-without-promise.png"
            alt="Random Number Without Promise Code Snippet"
          />
        </div>

        <div className="code-section">
          <h3 className="code-title">🚀 With Promise</h3>
          <p className="code-description">
            Here, <code>setTimeout</code> is wrapped inside a{' '}
            <code>Promise</code>. This allows us to use <code>.then()</code> to
            handle the result asynchronously, making the function more flexible
            for chaining operations.
          </p>
          <img
            className="code-snippet-img"
            src="/images/random-with-promise.png"
            alt="Random Number With Promise Code Snippet"
          />
        </div>

        <h3 className="key-differences-title">⚡ Key Differences</h3>
        <ul className="key-differences-list">
          <li>
            <strong>Execution Flow:</strong> Both methods introduce a delay, but
            the Promise-based version allows structured asynchronous handling.
          </li>
          <li>
            <strong>Readability:</strong> Promises provide a cleaner way to
            manage delayed operations compared to nested callbacks.
          </li>
          <li>
            <strong>Scalability:</strong> Promises make it easier to chain
            multiple asynchronous steps if needed.
          </li>
        </ul>
      </section>
    </section>
  )
}

export default FunctionFetch
