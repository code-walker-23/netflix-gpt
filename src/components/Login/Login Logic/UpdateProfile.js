import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NETFLIX_BACKGROUND_IMG } from "../../../utils/constant";

const UpdateProfile = ({ profile }) => {
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (displayName !== user?.displayName) {
        await updateProfile(user, { displayName });
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
