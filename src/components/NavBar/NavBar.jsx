import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="mb-5">
      <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            
            <NavLink to="/home" className="link text-right">
              SuperHero App
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavLink to="/home" className="link text-right">
                Home
              </NavLink>
              <NavLink to="/add-hero" className="link">
                Hero Finder
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default NavBar;
