import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const signOut = async () => {
    try {
      await Auth.signOut();
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
        signOut
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
