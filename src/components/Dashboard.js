import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Auth } from "aws-amplify";
import '../styles/Dashboard.scss'
import SideNav from "./Dashboard/SideNav";
import ClientDash from "./Dashboard/ClientDash";
import Preview from "./Dashboard/Preview";

const Dashboard = () => {
  const { loggedIn, signOut, setUser, user } = useContext(AppContext);

  useEffect(async () => {
    if (loggedIn) {
      await Auth.currentAuthenticatedUser().then((res) => {
        setUser(res);
        return res
      }).then(() => {
          console.log(user)
      })
    }
  }, []);
  return (
    <div className="dashboard">
      {loggedIn && user ? (
        <>
        <SideNav/>
        <ClientDash/>
        <Preview/>
          {/* <button onClick={signOut} className="btn">
            Sign out
          </button>
          <h1>Hello: {user.attributes.email}</h1>
          <h2>You are: {user.signInUserSession.idToken.payload["cognito:groups"][0]} </h2> */}
        </>
      ) : <Redirect to="/login" />}
    </div>
  );
};

export default Dashboard;
