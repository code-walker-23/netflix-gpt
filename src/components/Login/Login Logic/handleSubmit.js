import { checkValidData } from "../../../utils/validat";
import { handleSignIn } from "./handleSignIn";
import { handleSignUp } from "./handleSignUp";
import { toast } from "react-toastify";

export const handleSubmit = async (config) => {
  const {
    setErrorMessage,
    isSignInForm,
    setIsSignForm,
    email,
    password,
    firstName,
    lastName,
  } = config;


  const validationError = checkValidData(email, password, firstName, lastName);
  if (validationError) {
    setErrorMessage(validationError);
    return;
  }

  setErrorMessage("");

  try {
    if (isSignInForm) {
      await handleSignIn({ email, password });
    } else {
      await handleSignUp({ setIsSignForm, email, password, firstName, lastName });
    }
  } catch (error) {
    toast.error(`Error: ${error.message}`, { position: "bottom-center" });
  }
};
