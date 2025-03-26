import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import FunctionTester from './components/FunctionTester/FunctionTester'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FunctionTester />} />
      </Routes>
    </Router>
  )
}

export default App
