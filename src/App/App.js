import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import Home from "../screens/Home/Home";
import AddHero from "../screens/AddHero/AddHero";
import HeroDetails from "../screens/HeroDetails/HeroDetails";
function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/add-hero" >Add</NavLink>
      </div>
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
              <Redirect to="/home" exact/>
            </Route>

          </Switch> 
      </Router>
    </div>
  );
}

export default App;
