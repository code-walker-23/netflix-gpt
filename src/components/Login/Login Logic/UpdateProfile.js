import React, { useState } from "react";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NETFLIX_BACKGROUND_IMG } from "../../../utils/constant";

const UpdateProfile = ({ profile }) => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  // State for profile fields
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Re-authenticate if updating password
      if (newPassword) {
        if (!currentPassword) {
          throw new Error(
            "Current password is required to update the password."
          );
        }
        const credential = EmailAuthProvider.credential(
          user.email,
          currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
      }

      // Update display name if changed
      if (displayName !== user?.displayName) {
        await updateProfile(user, { displayName });
      }

      // Handle email update with verification
      if (email !== user?.email) {
        // First, update the email
        await updateEmail(user, email);
        // Send verification email
        await sendEmailVerification(user);
        toast.info(
          "Please verify your new email address. A verification email has been sent.",
          { position: "top-center" }
        );
      }

      toast.success("Profile updated successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "bottom-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-black bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMG})` }}
    >
      <div className="relative z-10 bg-black bg-opacity-80 p-16 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8">Update Profile</h1>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Display Name"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
          />
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password (required for password change)"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password (optional)"
            className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
          />
          <button
            type="submit"
            className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
        <p className="text-gray-500 mt-6 text-center text-lg">
          <button className="text-white hover:underline" onClick={profile}>
            Go back to Profile
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
