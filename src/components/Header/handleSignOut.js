import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { toast } from "react-toastify";

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    toast.success("User signed out successfully!", {
      position: "top-center",
    });
  } catch (error) {
    toast.error(`Error: ${error.message}`, { position: "bottom-center" });
  }
};
