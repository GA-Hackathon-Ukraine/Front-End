import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from './logo.svg'
import Favorite from './favorite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
const NavBar = ({ user, handleLogout }) => {
  const showSettings = (event)=> {
    event.preventDefault();

  }


  return (
    <Navbar style={{padding: "0 10px"}} collapseOnSelect expand="lg" bg="light" variant="light">

      <Navbar.Brand href="#home">
        <img src={Logo}></img>


      </Navbar.Brand>
      <div style={{display: "flex", gap: "20px", alignItems: "center"}} >
      <div>
        <img src={Favorite}></img>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        {user ? 
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profiles">Profiles</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
        </Nav>
        :
        <Nav className="mr-auto">
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/resources">Resources</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/jobform">Post a job</Nav.Link>
      </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
    // <>
    //   {user ?
    //     <nav>
    //       <div>
    //         <h3>Welcome, {user.name}</h3>
    //         <Link className="menu-item" to="/">Home</Link>
    //         <Link className="menu-item" to="/profiles"><h3>Profiles</h3></Link>
    //         <Link className="menu-item" to="" onClick={handleLogout}><h3>Log out</h3></Link>
    //         <Link className="menu-item" to="/resources"><h3>Resources</h3></Link>
    //         <Link className="menu-item" to="/about"><h3>About</h3></Link>
    //         <Link className="menu-item" to="/jobform"><h3>Post a job</h3></Link>

    //       </div>
    //     </nav>
    //   :
    //     <nav>
    //       <div>
    //         <Link className="menu-item" to="/login"><h3>Log In</h3></Link>
    //         <Link className="menu-item" to="/signup"><h3>Sign Up</h3></Link>
    //         <Link className="menu-item" to="/resources"><h3>Resources</h3></Link>
    //         <Link className="menu-item" to="/about"><h3>About</h3></Link>
    //         <Link className="menu-item" to="/jobform"><h3>Post a job</h3></Link>
    //       </div>
    //     </nav>
    //   }
    //   </>
  )
}

export default NavBar
