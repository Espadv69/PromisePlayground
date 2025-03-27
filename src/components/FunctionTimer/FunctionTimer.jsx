import { useState, useEffect } from 'react'
import './FunctionTimer.css'

const FunctionTimer = () => {
  const [message, setMessage] = useState('')
  let timeoutId = null

  // 🚀 Clear Timeout
  useEffect(() => {
    return () => clearTimeout(timeoutId)
  }, [])
}

export default FunctionTimer
