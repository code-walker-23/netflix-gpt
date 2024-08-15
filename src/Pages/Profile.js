import React from "react";
import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND_IMG } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleUpdate } from "../utils/Slices/userUpdateSlice";
import UpdateProfile from "../components/Login/Login Logic/UpdateProfile";

const Profile = () => {
  const { displayName, email, imgUrl } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const showUpdate = useSelector((state) => state.userUpdate.showUpdate);

  const handleUpdateProfile = () => {
    dispatch(toggleUpdate());
  };

  return showUpdate ? (
    <UpdateProfile profile={handleUpdateProfile} />
  ) : (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${NETFLIX_BACKGROUND_IMG})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="w-full max-w-md bg-gray-900 bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Profile</h1>
          <div className="flex flex-col items-center mb-6">
            <img
              src={imgUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-red-600 mb-4"
            />
            <h2 className="text-2xl font-semibold text-white">
              {displayName || "No Display Name"}
            </h2>
            <p className="text-lg text-gray-300">{email || "No Email"}</p>
          </div>
          <button
            onClick={handleUpdateProfile}
            className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
