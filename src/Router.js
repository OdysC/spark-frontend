import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Views
import SignIn from './Views/SignIn.js';
import SignUp from './Views/SignUp.js';

export default function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    </Router>
  );
}