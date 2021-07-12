import React, { useState } from "react";
import { Auth } from "aws-amplify";

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const signOut = async () => {
    try {
      await Auth.signOut().then(() => {})
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        signOut,
        setUser,
        user
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
