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
}

export default FunctionFetch
