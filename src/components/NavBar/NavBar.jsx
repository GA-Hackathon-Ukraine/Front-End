import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
const NavBar = ({ user, handleLogout }) => {
  const showSettings = (event)=> {
    event.preventDefault();

  }


  return (
    <nav class="navbar navbar-light bg-lignt">
    <a href="/" class="navbar-brand">Light</a>
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
        <span class="navbar-toggler-icon my-toggler"></span>
    </button>
    <div class="navbar-collapse collapse" id="collapsingNavbar2">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
</nav>
    // <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
    //   <Navbar.Brand href="#home">
    //     <div>
    //       <img src={logo}></img>
    //     </div>
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    // <>
    //   {user ?
    //     <nav>
    //       <div>
    //         <h3>Welcome, {user.name}</h3>
    //         <Link className="menu-item" to="/"><h3>Home</h3></Link>
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
