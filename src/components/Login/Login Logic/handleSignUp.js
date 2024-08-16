import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
    // Step 1: Create a new user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Step 2: Update the user's display name
    if (user) {
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

    } else {
      throw new Error("User creation failed");
    }

    // Step 3: Save additional user info to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      firstName: firstName,
      lastName: lastName,
    });

    // Notify success and switch to sign-in form
    toast.success("Account created successfully! Please sign in.", {
      position: "top-center",
    });
    setIsSignInForm(true);
  } catch (error) {
    // Notify error
    toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    console.error("Sign up error:", error);
  }
};
