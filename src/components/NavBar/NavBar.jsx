import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Logo from './logon.png';
import Favorite from './favorite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
const NavBar = ({ user, handleLogout }) => {


  
  let navigate = useNavigate();

  function handleHome() {
    navigate('/')
  }

  const handleGoToFaves = () => {
    navigate('/favorites')
  }

  const handleNavPage=(eventKey, event)=>{
    console.log(event)
    navigate(eventKey)
  }


  return (
    <>
    <Navbar
      style={{ padding: '0 10px', position: "fixed", width:"100%", zIndex: "100",}}
      expand="xxxl"
      bg="light"
      variant="light"
      onSelect={handleNavPage}
      collapseOnSelect    
    >
      <Navbar.Brand onClick={handleHome}>
        <img src={Logo} className="logo-image-main" height="100"></img>
      </Navbar.Brand>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div >
          {user ? <img onClick={handleGoToFaves} src={Favorite}></img> :<></>}
        </div>
        <Navbar.Toggle
          style={{border: "hidden"}}
          data-bs-target="#navbarSupportedContent"
          aria-controls="responsive-navbar-nav"
        />
      </div>
      <Navbar.Collapse collapseOnSelect  id="responsive-navbar-nav">
        {
          user ? (
            <Nav className="mr-auto">
              <Nav.Link className="nav-link">Home</Nav.Link>
              {/* <Nav.Link as={Link} className="nav-link" to="/profiles">Profiles</Nav.Link> */}
              <Nav.Link className="nav-link" >Resources</Nav.Link>
              <Nav.Link className="nav-link" >About</Nav.Link>
              <Nav.Link className="nav-link" >Post a job</Nav.Link>
              <Nav.Link className="nav-link" onClick={handleLogout}>Log out</Nav.Link>
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link eventKey="login" className="nav-link" >Log In</Nav.Link>
              <Nav.Link eventKey="signup" className="nav-link" >Sign Up</Nav.Link>
              <Nav.Link eventKey="resources" className="nav-link" >Resources</Nav.Link>
              <Nav.Link eventKey="about" className="nav-link" >About</Nav.Link>
              <Nav.Link eventKey="jobform" className="nav-link" >Post a job</Nav.Link>
            </Nav>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default NavBar;
