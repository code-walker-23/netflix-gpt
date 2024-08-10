
// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "../utils/firebase";
// import { signOut } from "firebase/auth";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
// import { USER_ICON, NETFLIX_LOGO } from "../utils/constant";

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const user = useSelector((state) => state.user);
//   const dropdownRef = useRef(null);
//   const userIconRef = useRef(null);

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       toast.success("User signed out successfully!", {
//         position: "top-center",
//       });
//     } catch (error) {
//       toast.error(`Error: ${error.message}`, { position: "bottom-center" });
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   // Close the dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         !userIconRef.current.contains(event.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-transparent to-transparent text-white">
//       <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
//         {/* Logo */}
//         <Link to="/browse" className="flex-shrink-0">
//           <img
//             className="w-24 md:w-32 mr-6"
//             src={NETFLIX_LOGO}
//             alt="Netflix Logo"
//           />
//         </Link>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex flex-grow items-center space-x-8">
//           {[
//             "Home",
//             "TV Shows",
//             "Movies",
//             "New & Popular",
//             "My List",
//             "Series",
//             "Browse by Languages",
//           ].map((item) => (
//             <Link
//               to={`/${item
//                 .toLowerCase()
//                 .replace(/ & /g, "-")
//                 .replace(/\s+/g, "-")}`} // Create link path dynamically
//               className="text-xs md:text-sm font-semibold relative group"
//               key={item}
//             >
//               <span className="relative">
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* User Icon and Dropdown Menu */}
//         <div className="relative flex items-center">
//           {user ? (
//             <>
//               <img
//                 src={USER_ICON}
//                 alt="User Icon"
//                 className="w-10 h-10 border-2 border-white cursor-pointer"
//                 ref={userIconRef}
//                 onClick={toggleDropdown}
//               />
//               {dropdownOpen && (
//                 <div
//                   ref={dropdownRef}
//                   className="absolute top-12 right-0 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
//                 >
//                   <Link
//                     to="/profile"
//                     className="block py-2 px-4 text-white hover:bg-gray-700"
//                     onClick={() => setDropdownOpen(false)} // Close dropdown when clicking profile
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleSignOut}
//                     className="w-full text-left py-2 px-4 text-white hover:bg-gray-700"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <p className="hidden md:block text-xs md:text-sm font-semibold">
//               Guest
//             </p>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

/* When managing dropdown menus or popovers, it’s common to need access to the DOM elements for both the toggle button (e.g., a user icon) and the dropdown menu itself. Using React’s ref can be helpful in such scenarios to handle interactions like clicking outside the menu to close it.

Here’s how you can use ref in conjunction with your dropdown menu:

1. Import useRef and useEffect
First, import useRef and useEffect from React:

jsx
import React, { useState, useRef, useEffect } from "react";
2. Create Refs
Create refs for both the user icon and the dropdown menu:

jsx

const userIconRef = useRef(null);
const dropdownRef = useRef(null);
3. Add useEffect to Handle Click Outside
Use useEffect to add an event listener that closes the dropdown when clicking outside of it:

jsx
Copy code
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      userIconRef.current &&
      !userIconRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropDown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
4. Assign Refs to Elements
Attach the refs to your user icon and dropdown elements:

jsx
Copy code
<img
  ref={userIconRef}
  src={USER_ICON}
  alt="User Icon"
  className="w-10 h-10 border-2 border-white cursor-pointer"
  onClick={toggleDropDown}
/>

{showDropDown && (
  <div
    ref={dropdownRef}
    className="absolute top-12 right-0 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
  >
    <Link
      to="/profile"
      className="block py-2 px-4 text-white hover:bg-gray-700"
    >
      Profile
    </Link>
    <button
      onClick={handleSignOut}
      className="w-full text-left py-2 px-4 text-white hover:bg-gray-700"
    >
      Sign Out
    </button>
  </div>
)} */
















  
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   setPersistence,
//   signInWithEmailAndPassword,
//   browserSessionPersistence,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../utils/firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { checkValidData } from "../utils/validat";

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate input
//     const validationError = checkValidData(
//       email,
//       password,
//       firstName,
//       lastName
//     );
//     if (validationError) {
//       setErrorMessage(validationError);
//       return;
//     }

//     setErrorMessage("");

//     try {
//       if (isSignInForm) {
//         await handleSignIn();
//       } else {
//         await handleSignUp();
//       }
//     } catch (error) {
//       toast.error(`Error: ${error.message}`, { position: "bottom-center" });
//     }
//   };

//   const handleSignIn = async () => {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     console.log("User signed in:", user);
//     toast.success("User signed in successfully!", { position: "top-center" });
//     setTimeout(
//       () => navigate("/browse"), // Redirect to browse page
//       3000
//     );
//   };

//   const handleSignUp = async () => {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     console.log("User created:", user);

//     await setDoc(doc(db, "users", user.uid), {
//       email: user.email,
//       firstName: firstName,
//       lastName: lastName,
//     });

//     toast.success("Account created successfully! Please sign in.", {
//       position: "top-center",
//     });
//     setIsSignInForm(true);
//   };

//   const toggleSignIn = () => {
//     setIsSignInForm(!isSignInForm);
//     setErrorMessage("");
//     setEmail("");
//     setPassword("");
//     setFirstName("");
//     setLastName("");
//   };

//   return (
//     <div className="relative h-screen flex items-center justify-center bg-black">
//       <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-transparent z-20 flex items-center">
//         <img
//           className="logo"
//           src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//           alt="Netflix Logo"
//         />
//       </div>

//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
//         alt="background"
//         className="absolute inset-0 object-cover w-full h-full opacity-60"
//       />
//       <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold text-white mb-8">
//           {isSignInForm ? "Sign In" : "Sign Up"}
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {!isSignInForm && (
//             <>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="First Name"
//                 className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
//               />
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Last Name"
//                 className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
//               />
//             </>
//           )}
//           <div className="relative">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
//             />
//           </div>
//           <div className="relative mt-4">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
//             />
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
//           >
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </button>
//         </form>
//         <div className="flex items-center justify-between text-white text-lg mt-4">
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" className="custom-checkbox" />
//             <span className="text-white">Remember me</span>
//           </label>
//           {isSignInForm && (
//             <a href="/" className="text-white hover:underline">
//               Forgot Password?
//             </a>
//           )}
//         </div>
//         <p className="text-gray-500 mt-6 text-center text-lg">
//           {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
//           <button onClick={toggleSignIn} className="text-white hover:underline">
//             {isSignInForm ? "Sign Up now." : "Sign In now."}
//           </button>
//         </p>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;
