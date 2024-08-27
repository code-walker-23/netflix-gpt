import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import { setRemoveSearchData } from "../utils/Slices/gpt/movieGptSlice";

const useAuthStateChange = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        const url = "https://avatars.githubusercontent.com/u/116024992?v=4";
        dispatch(addUser({ uid, email, displayName, url }));
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        dispatch(setRemoveSearchData());
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, []);
};

export default useAuthStateChange;
