import { Navbar, Nav, Container, Col,Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/actions";
const NavBar = () => {
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    dispatch(logOut());
  }
  return (
    <header className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Row className="w-100">
            <Col xs={10} >
              <Navbar.Brand>
                <NavLink to="/home" className="link text-right">
                  SuperHero App
                </NavLink>
              </Navbar.Brand>
            </Col>
            <Col xs={2}>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/home" className="link  ">
                    Home
                  </NavLink>
                  <NavLink to="/add-hero" className="link ">
                    Hero Finder
                  </NavLink>
                  <NavLink  className="link " to="/home" onClick={logoutHandler}>Log Out</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};
export default NavBar;
