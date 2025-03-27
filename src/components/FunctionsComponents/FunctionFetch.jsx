import { useState, useEffect } from 'react'
import './Functions.css'

const DATA = {
  user: 'Aitor',
  lastname: 'Díaz',
  age: 21,
}

const FunctionFetch = () => {
  const [message, setMessage] = useState('')
  let timeoutId = null

  // Function without promise ✅
  const fetchDataWithoutPromise = () => {
    setMessage('Fetching data...')

    timeoutId = setTimeout(() => {
      setMessage(DATA.user + ' ' + DATA.lastname + ' ' + DATA.age)
    }, 2000)
  }
}

export default FunctionFetch
