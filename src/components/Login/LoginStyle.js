import React from "react";
import { NETFLIX_BACKGROUND_IMG } from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleSubmit } from "./Login Logic/handleSubmit";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginStyle = ({
  toggleSignIn,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  firstName,
  lastName,
  email,
  password,
  errorMessage,
  isSignInForm,
  setIsSignForm,
  setErrorMessage,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      setErrorMessage,
      isSignInForm,
      setIsSignForm,
      email,
      password,
      firstName,
      lastName,
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <img
        src={NETFLIX_BACKGROUND_IMG}
        className="absolute inset-0 object-cover w-full h-full opacity-60"
        alt="Netflix Background"
      />
      <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <LoginForm
          handleFormSubmit={handleFormSubmit}
          isSignInForm={isSignInForm}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPassword={setPassword}
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          errorMessage={errorMessage}
        />
        <div className="flex items-center justify-between text-white text-lg mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-white">Remember me</span>
          </label>
          <Link to="/" className="text-white hover:underline">
            Forgot Password?
          </Link>
        </div>
        <p className="text-gray-500 mt-6 text-center text-lg">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button onClick={toggleSignIn} className="text-white hover:underline">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginStyle;
