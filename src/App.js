import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ReactFormValidation } from "./ReactFormValidation";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
