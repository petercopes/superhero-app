import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar/NavBar";
const Home = React.lazy(() =>   import('../screens/Home/Home'));
const AddHero = React.lazy(() =>  import("../screens/AddHero/AddHero"));
const HeroDetails = React.lazy(() =>  import("../screens/HeroDetails/HeroDetails"));
function App() {
  return (
    <>
      <div className="App overflow-hidden">
        <Login />
        <NavBar />
        <Suspense fallback={<p></p>}>
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
        </Suspense>
      </div>
    </>
  );
}

export default App;
