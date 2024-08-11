import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../../utils/firebase";

export const handleSignUp = async ({
  setIsSignInForm,
  email,
  password,
  firstName,
  lastName,
}) => {
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
