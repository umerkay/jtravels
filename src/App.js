import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";
import "./Components/SelectSearch.scss";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
