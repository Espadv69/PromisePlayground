import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import FunctionTester from './components/FunctionsComponents/FunctionTester'
import FunctionTimer from './components/FunctionsComponents/FunctionTimer'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FunctionTester />} />
        <Route path="/timer" element={<FunctionTimer />} />
      </Routes>
    </Router>
  )
}

export default App
