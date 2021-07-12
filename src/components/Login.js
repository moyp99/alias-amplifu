import React, { useState, useContext } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";

const Login = () => {
  const { setLoggedIn, } = useContext(AppContext);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submitSignIn = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(mail, password);

      history.push("/");

      setLoggedIn(true);
    } catch (err) {
      console.error("there was an error loggin in", err);
    }
  };

  return (
    <div className="login">
      <form onSubmit={(e) => submitSignIn(e)}>
        <label htmlFor="email">Username</label>
        <input
          type="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          id="email"
          placeholder="mail@mail.com"
        ></input>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder=""
        ></input>
        <button type="submit" className="">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
