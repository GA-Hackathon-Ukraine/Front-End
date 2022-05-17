import { Navbar, Nav } from "react-bootstrap";
import Logo from "./logon.png";
import Favorite from "./favorite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const NavBar = ({ setSearchShow, searchShow }) => {
  const auth = useAuth();
  let navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
    setSearchShow(false);
    if (document.getElementsByClassName("active")[0]) {
      document.getElementsByClassName("active")[0].classList.remove("active");
    }
  };

  const handleGoToFaves = () => {
    navigate("/favorites");
  };

  const handleNavPage = (eventKey, event) => {
    navigate(eventKey);
  };

  return (
    <>
      <Navbar
        style={{
          padding: "0 10px",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.1)",
        }}
        expand="md"
        bg="light"
        variant="light"
        onSelect={handleNavPage}
        collapseOnSelect
      >
        <Nav.Link className="nav-link">
          <Navbar.Brand onClick={handleHome}>
            <img
              src={Logo}
              className="logo-image-main"
              height="100"
              alt=""
            ></img>
          </Navbar.Brand>
        </Nav.Link>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div>
            {auth.user ? (
              <img
                className="navbar-faves-icon"
                onClick={handleGoToFaves}
                src={Favorite}
                alt=""
              ></img>
            ) : (
              <></>
            )}
          </div>
          <Navbar.Toggle
            style={{ border: "hidden" }}
            data-bs-target="#navbarSupportedContent"
            aria-controls="responsive-navbar-nav"
          />
        </div>
        <Navbar.Collapse collapseOnSelect id="responsive-navbar-nav">
          {auth.user ? (
            <Nav className="mr-auto">
              <Nav.Link eventKey="resources" className="nav-link">
                Resources
              </Nav.Link>
              <Nav.Link eventKey="about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link eventKey="jobform" className="nav-link">
                Post a job
              </Nav.Link>
              <Nav.Link eventKey="/" className="nav-link" onClick={auth.logout}>
                Log out
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="mr-auto">
              <Nav.Link eventKey="login" className="nav-link">
                Log In
              </Nav.Link>
              <Nav.Link eventKey="signup" className="nav-link">
                Sign Up
              </Nav.Link>
              <Nav.Link eventKey="resources" className="nav-link">
                Resources
              </Nav.Link>
              <Nav.Link eventKey="about" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link eventKey="jobform" className="nav-link">
                Post a job
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
