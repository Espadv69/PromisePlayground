import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FunctionTester from './components/FunctionTester/FunctionTester'

const App = () => {
  return (
    <Router>
      {/* Add navbar */}
      <Routes>
        <Route path="/" element={<FunctionTester />} />
      </Routes>
    </Router>
  )
}

export default App
