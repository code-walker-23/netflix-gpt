import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full opacity-60"
      />
      <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="space-y-6">
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
              <input
                type="email"
                placeholder="Last Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
          />
          <button className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg">
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
          <button onClick={handleSignIn} className="text-white hover:underline">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;



/* 

formik : it is library for form handling in react and it is very popular library for form handling in react. 

*/