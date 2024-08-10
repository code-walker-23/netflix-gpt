import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkValidData } from "../../utils/validat";
import useAuthStateChange from "../../hooks/useAuthStateChange";
import LoginStyle from "./LoginStyle";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    const validationError = checkValidData(
      email,
      password,
      firstName,
      lastName
    );
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage("");

    try {
      if (isSignInForm) {
        await handleSignIn();
      } else {
        await handleSignUp();
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("User signed in successfully!", { position: "top-center" });
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
      });

      toast.success("Account created successfully! Please sign in.", {
        position: "top-center",
      });
      setIsSignInForm(true);
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  useAuthStateChange();

  return (
    <div>
      <LoginStyle
        handleSubmit={handleSubmit}
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
      />
    </div>
  );
};

export default Login;
