import React from "react";
import { NETFLIX_BACKGROUND_IMG } from "../../utils/constant";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleSubmit } from "./Login Logic/handleSubmit";

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
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {!isSignInForm && (
            <>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
            </>
          )}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center justify-between text-white text-lg mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-white">Remember me</span>
          </label>
          {isSignInForm && (
            <a href="/" className="text-white hover:underline">
              Forgot Password?
            </a>
          )}
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
