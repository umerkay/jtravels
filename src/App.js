import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Components/SelectSearch.scss";
import PackageView from "./Components/Pages/PackageView";
import SearchView from "./Components/Pages/SearchView";
import { StateStore } from "./Store";
import { setTestValue } from "./Actions/test";

function App() {
  const {
    state: { test },
    dispatch,
  } = useContext(StateStore);
  return (
    <>
      <Router>
        <Navbar />
        {/* {test}
        <button onClick={() => setTestValue(dispatch, test + 1)}>+</button> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/s/:module" exact component={SearchView} />
          <Route path="/packages/:id" exact component={PackageView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
