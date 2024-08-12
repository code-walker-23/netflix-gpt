import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import useAuthStateChange from "../../hooks/useAuthStateChange";
import LoginStyle from "./LoginStyle";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };


  return (
    <div>
      <LoginStyle
        toggleSignIn={toggleSignIn}
        setEmail={setEmail}
        setPassword={setPassword}
        setFirstName={setFirstName}
        setLastName={setLastName}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        errorMessage={errorMessage}
        isSignInForm={isSignInForm}
        setIsSignInForm={setIsSignInForm}
        setErrorMessage={setErrorMessage}
      />
    </div>
  );
};

export default Login;
