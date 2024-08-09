import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { USER_ICON, NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const user = useSelector((state) => state.user);

  // Create refs
  const userIconRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("User signed out successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    }
  };

  // Toggle dropdown visibility
  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  // Function to handle click outside
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

  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black via-transparent to-transparent text-white">
      <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
        {/* Logo */}
        <Link to="/browse" className="flex-shrink-0">
          <img
            className="w-24 md:w-32 mr-6"
            src={NETFLIX_LOGO}
            alt="Netflix Logo"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-grow items-center space-x-8">
          <Link
            to="/browse"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/tv-shows"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            TV Shows
          </Link>
          <Link
            to="/movies"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Movies
          </Link>
          <Link
            to="/new"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            New & Popular
          </Link>
          <Link
            to="/my-list"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            My List
          </Link>
          <Link
            to="/series"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Series
          </Link>
          <Link
            to="/languages"
            className="text-sm font-semibold hover:text-red-600 transition-colors duration-300"
          >
            Browse by Languages
          </Link>
        </nav>

        {/* User Icon and Dropdown Menu */}
        <div className="relative flex items-center">
          {user ? (
            <>
              <img
                ref={userIconRef}
                src={USER_ICON}
                alt="User Icon"
                className="w-10 h-10 border-2 rounded-lg cursor-pointer"
                onClick={toggleDropDown} // Toggle dropdown on click
              />
              {showDropDown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-12 right-0 w-48 bg-black border border-gray-600 rounded-lg shadow-lg"
                >
                  <Link
                    to="/profile"
                    className="block py-2 px-4 text-white hover:bg-gray-800"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left py-2 px-4 text-white hover:bg-gray-800"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="hidden md:block text-xs md:text-sm font-semibold">
              Guest
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

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
