import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  
  return (
    <>
      {user ?
        <nav>

          <ul>
            <li>Welcome, {user.name}</li>
            {/* <Link>☰</Link> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>Log out</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/jobform">List a job</Link></li>

          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/jobform">List a job</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
