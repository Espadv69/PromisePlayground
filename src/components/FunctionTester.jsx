import { useState, useEffect } from 'react'
import './FunctionTester.css'

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
    <section className="promises">
      <h1>Promise Playground 🎭</h1>

      <div className="buttons">
        <button onClick={fetchDataWithoutPromise}>Without Promise</button>
        <button onClick={fetchDataWithPromise}>With Promise</button>
      </div>

      <div className="result">{result}</div>
    </section>
  )
}

export default FunctionTester
