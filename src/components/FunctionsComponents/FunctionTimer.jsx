import { useState, useEffect } from 'react'
import './Functions.css'

const FunctionTimer = () => {
  const [message, setMessage] = useState('')
  let timeoutId = null

  // ❌ Function without promise
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

      <section className="explanation-container">
        <h2 className="explanation-title">
          Understanding Timers: Promise vs Non-Promise
        </h2>
        <p className="explanation-text">
          In JavaScript, timers can be implemented using <code>setTimeout</code>
          . While a standard timer updates the state after a delay, a
          Promise-based timer allows better control over the asynchronous
          execution.
        </p>

        <div className="code-section">
          <h3 className="code-title">📌 Without Promise</h3>
          <p className="code-description">
            This function directly uses <code>setTimeout</code> to update the
            state after a specified delay. The function runs and updates the UI
            when the timer completes.
          </p>
          <img
            className="code-snippet-img"
            src="/images/timer-without-promise.png"
            alt="Timer Without Promise Code Snippet"
          />
        </div>

        <div className="code-section">
          <h3 className="code-title">🚀 With Promise</h3>
          <p className="code-description">
            Here, <code>setTimeout</code> is wrapped inside a{' '}
            <code>Promise</code>. This allows us to handle the result
            asynchronously using <code>.then()</code>, making it easier to
            integrate with modern JavaScript workflows.
          </p>
          <img
            className="code-snippet-img"
            src="/images/timer-with-promise.png"
            alt="Timer With Promise Code Snippet"
          />
        </div>

        <h3 className="key-differences-title">⚡ Key Differences</h3>
        <ul className="key-differences-list">
          <li>
            <strong>Execution Flow:</strong> Both versions execute
            asynchronously, but the Promise-based version is more flexible for
            chaining operations.
          </li>
          <li>
            <strong>Readability:</strong> Promises provide a structured way to
            handle async operations, making the code more maintainable.
          </li>
          <li>
            <strong>Scalability:</strong> The Promise-based approach allows
            better handling of multiple asynchronous timers in sequence.
          </li>
        </ul>
      </section>
    </section>
  )
}

export default FunctionTimer
