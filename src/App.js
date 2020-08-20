import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ReactFormValidation } from "./routes/ReactFormValidation";
import { ReactFormValidation2 } from "./routes/ReactFormValidation2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/react_form_validation`}>
            <div className="Section">
              <ReactFormValidation />
            </div>
          </Route>

          <Route exact path={`/react_form_validation2`}>
            <div className="Section">
              <ReactFormValidation2 />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
