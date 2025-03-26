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

  // 🚀 Clear timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])
}

export default FunctionTester
