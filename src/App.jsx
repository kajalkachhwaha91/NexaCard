import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./features/auth/authSlice";
import { useEffect } from "react";
import LandingPage from "./pages/landingpage/landingPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
   const themeMode = useSelector((state) => state.theme.mode);

  // Apply theme class to body
  useEffect(() => {
    document.documentElement.className = themeMode;
  }, [themeMode]);

  return (
    <div className="">
      <LandingPage />
    </div>
  );
}

export default App;
