import {
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="mb-5">
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Row className="w-100">
            <Col xs={10}>
              <Navbar.Brand>
                <NavLink to="/home" className="link text-right">
                  SuperHero App
                </NavLink>
              </Navbar.Brand>
            </Col>
            <Col xs={2}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Col>
          </Row>
          <Row className="w-100 text-end">
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
          </Row>
        </Container>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink to="/home" className="link">
            SuperHeroApp
          </NavLink>
        </Navbar.Brand>
        <NavBar.Toggle aria-controls="responsive-navbar-bar" />
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav>
           
                <NavLink to="/home" className="link">
                  Home
                </NavLink>

                <NavLink to="/add-hero" className="link">
                  Hero Finder
                </NavLink>
          </Nav>
        </NavBar.Collapse>
      </Navbar> */}
    </header>
  );
};
export default NavBar;
