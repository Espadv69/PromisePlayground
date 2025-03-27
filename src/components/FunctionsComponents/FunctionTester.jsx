import { useState, useEffect } from 'react'
import './Functions.css'

const FunctionTester = () => {
  const [result, setResult] = useState('')

  let timeoutId = null

  // Function without promise ✅
  const fetchDataWithoutPromise = () => {
    timeoutId = setTimeout(() => {
      setResult('Data fetched without promise')
    }, 2000)
  }

  // Function with promise ✅
  const fetchDataWithPromise = () => {
    new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve('Data fetched with promise')
      }, 2000)
    }).then((message) => setResult(message))
  }

  // 🚀 Clear timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section className="promises-container">
      <h1 className="title">Promise Playground 🎭</h1>
      <h4>Tester 🧪</h4>

      <div className="buttons-container">
        <button className="action-btn" onClick={fetchDataWithoutPromise}>
          Without Promise
        </button>
        <button className="action-btn" onClick={fetchDataWithPromise}>
          With Promise
        </button>
      </div>

      <div className="result-screen">
        {result || 'Press any button and wait'}
      </div>

      <section className="explanation-container">
        <h2 className="explanation-title">
          Understanding Promises vs Non-Promises
        </h2>
        <p className="explanation-text">
          In JavaScript, a function can either run synchronously (blocking
          execution) or asynchronously using Promises, allowing other operations
          to continue.
        </p>

        <div className="code-section">
          <h3 className="code-title">📌 Without Promise</h3>
          <p className="code-description">
            This function executes a <code>setTimeout</code> and directly
            updates the state after 2 seconds.
          </p>
          <img
            className="code-snippet-img"
            src="/images/withoutpromise.png"
            alt="Without Promise Code Snippet"
          />
        </div>

        <div className="code-section">
          <h3 className="code-title">🚀 With Promise</h3>
          <p className="code-description">
            Here, we wrap <code>setTimeout</code> inside a Promise. This allows
            us to use
            <code>.then()</code> for handling the result asynchronously.
          </p>
          <img
            className="code-snippet-img"
            src="/images/withpromise.png"
            alt="With Promise Code Snippet"
          />
        </div>

        <h3 className="key-differences-title">⚡ Key Differences</h3>
        <ul className="key-differences-list">
          <li>
            <strong>Execution Flow:</strong> The non-Promise function blocks
            execution, while the Promise-based function allows other tasks to
            run.
          </li>
          <li>
            <strong>Error Handling:</strong> Promises have built-in{' '}
            <code>.catch()</code> for handling errors easily.
          </li>
          <li>
            <strong>Scalability:</strong> Promises work better for chaining
            multiple asynchronous operations.
          </li>
        </ul>
      </section>
    </section>
  )
}

export default FunctionTester
