import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../screens/Home/Home";
import AddHero from "../screens/AddHero/AddHero";
import HeroDetails from "../screens/HeroDetails/HeroDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login/Login";

import NavBar from "../components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App overflow-hidden">
        <Login />
        <NavBar />
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
      
    </>
  );
}

export default App;
