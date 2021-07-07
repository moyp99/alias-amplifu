import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import Test from "./components/Test";

Amplify.configure(awsconfig);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const AssessLoggedInState = () => {
    Auth.currentAuthenticatedUser().then(() => {
      setLoggedIn(true);
    }).catch(() => {
      setLoggedIn(false);
    })
  }

  const [user, setUser] = useState();
  const fetchData = async () => {
    setUser(await Auth.currentSession());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {user !== undefined && (
         
          <Switch>
            <Route path="/test">
              <Test/>
            </Route>
            <Route path="/">
            <Dashboard user={user} />
            </Route>
          </Switch>
        
          
     
      )}
    </div>
  );
}

export default App;
