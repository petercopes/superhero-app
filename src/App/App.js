import React from "react";
import "./App.css";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Home from "../screens/Home/Home";
import AddHero from "../screens/AddHero/AddHero";
import HeroDetails from "../screens/HeroDetails/HeroDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login/Login";
import { Navbar, Container, Nav, Col } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Login />
      <header className="mb-2">
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
          <Navbar.Brand className="m-2">Hero Team App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2"/>
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
              <NavLink to="/home" className="link">
                Home
              </NavLink>
              <NavLink to="/add-hero"className="link">Hero Finder</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/add-hero">
          <AddHero />
        </Route>
        <Route path="/hero-details/:id">
          <HeroDetails />
        </Route>
        <Route path="/">
          <Redirect to="/home" exact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
