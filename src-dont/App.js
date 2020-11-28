import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/board/:id" component={BoardView} /> */}
          <Route
            path="/"
            render={() => (
              <div className="flexbox uc cu fullvh">
                Uh what? I think you shouldn't be here
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
