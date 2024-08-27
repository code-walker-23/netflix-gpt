import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { toast } from "react-toastify";
export const handleSignIn = async ({ email, password }) => {
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
