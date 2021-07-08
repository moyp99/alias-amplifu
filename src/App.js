import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState, useEffect, useContext } from "react";
import Login from "./components/Login";
import AppContext from "./context/AppContext";

Amplify.configure(awsconfig);

function App() {
  const { setLoggedIn } = useContext(AppContext);

  const [user, setUser] = useState();

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
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Dashboard  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
