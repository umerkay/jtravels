import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";
import "./Components/SelectSearch.scss";
import PackageView from "./Components/Pages/PackageView";
import SearchView from "./Components/Pages/SearchView";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/s/:module" exact component={SearchView} />
          <Route path="/packages/:id" exact component={PackageView} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
