import "./styles/Global.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState, useEffect, useContext } from "react";
import Login from "./components/Login";
import AppContext from "./context/AppContext";
import Test from "./components/Test";

Amplify.configure(awsconfig);

function App() {
  const { loggedIn, setLoggedIn, user } = useContext(AppContext);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
      })
      .catch(() => {
        setLoggedIn(false);
      });
  };

  // const fetchData = async () => {
  //   setUser(await Auth.currentSession());
  // };

  useEffect(() => {
    AssessLoggedInState();
  }, []);

  return (
    <div className="App">
    
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
