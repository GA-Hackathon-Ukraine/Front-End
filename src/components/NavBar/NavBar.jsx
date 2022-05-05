import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Logo from './logo.svg';
import Favorite from './favorite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = ({ user, handleLogout }) => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <Navbar
      style={{ padding: '0 10px' }}
      expand="xxxl"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="#home">
        <img src={Logo}></img>
      </Navbar.Brand>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <img src={Favorite}></img>
        </div>
        <Navbar.Toggle
          style={{border: "hidden"}}
          data-bs-target="#navbarSupportedContent"
          aria-controls="responsive-navbar-nav"
        />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        {
          user ? (
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link data-bs-toggle="collapse" to="/">
                <div className="collapse">Home</div>
              </Link>
              <Link to="/profiles">Profiles</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/about">About</Link>
              <Link onClick={handleLogout}>Log out</Link>
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              <Link className="nav-link" to="/signup">Sign Up</Link>
              <Link className="nav-link" to="/resources">Resources</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/jobform">Post a job</Link>
            </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
