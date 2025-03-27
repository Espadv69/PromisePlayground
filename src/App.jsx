import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import FunctionTester from './components/FunctionsComponents/FunctionTester'
import FunctionTimer from './components/FunctionsComponents/FunctionTimer'
import FunctionRandom from './components/FunctionsComponents/FunctionRandom'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FunctionTester />} />
        <Route path="/timer" element={<FunctionTimer />} />
        <Route path="/random" element={<FunctionRandom />} />
      </Routes>
    </Router>
  )
}

export default App
