import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './navbar.css'
const NavBar = ({ user, handleLogout }) => {
  const showSettings = (event)=> {
    event.preventDefault();

  }


  return (
    <Menu value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {user ?
        <nav>
          <div>
            <h3>Welcome, {user.name}</h3>
            <Link className="menu-item" to="/"><h3>Home</h3></Link>
            <Link className="menu-item" to="/profiles"><h3>Profiles</h3></Link>
            <Link className="menu-item" to="" onClick={handleLogout}><h3>Log out</h3></Link>
            <Link className="menu-item" to="/resources"><h3>Resources</h3></Link>
            <Link className="menu-item" to="/about"><h3>About</h3></Link>
            <Link className="menu-item" to="/jobform"><h3>Post a job</h3></Link>

          </div>
        </nav>
      :
        <nav>
          <div>
            <Link className="menu-item" to="/login"><h3>Log In</h3></Link>
            <Link className="menu-item" to="/signup"><h3>Sign Up</h3></Link>
            <Link className="menu-item" to="/resources"><h3>Resources</h3></Link>
            <Link className="menu-item" to="/about"><h3>About</h3></Link>
            <Link className="menu-item" to="/jobform"><h3>Post a job</h3></Link>
          </div>
        </nav>
      }
      </Menu>
  )
}

export default NavBar
