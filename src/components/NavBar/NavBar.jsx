import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        FunctionTester
      </Link>

      <Link to="/timer" className="nav-link">
        FunctionTimer
      </Link>
    </nav>
  )
}

export default NavBar
