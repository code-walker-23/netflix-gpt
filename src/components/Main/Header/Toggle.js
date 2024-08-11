import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleGptView } from "../../../utils/Slices/gptSearchSlice";

export const toggle = ({setShowDropDown,userIconRef,dropdownRef}) => {
  const dispatch = useDispatch();

    // Toggle dropdown
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
  
    const handleToggle = () => {
      console.log("Toggle GPT Search");
      dispatch(toggleGptView());
    };

    return { toggleDropDown,handleToggle };
};
