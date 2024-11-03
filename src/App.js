import React, { useState, useEffect } from "react";
import LoginPage from ".//Pages/LoginPage.jsx";
import WelcomePage from ".//Pages/WelcomePage.jsx";

function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  useEffect(() => {
    console.log("Component mounted, setting timer...");

    // Set a timeout to switch screens after 5 seconds
    const timer = setTimeout(() => {
      console.log("Timeout reached, switching to gallery screen.");
      setCurrentScreen("gallery");
    }, 500); // 5000ms = 5 seconds

    // Clean up the timeout if the component unmounts
    return () => {
      console.log("Cleaning up timer...");
      clearTimeout(timer);
    };
  }, []);

  console.log("Rendering", currentScreen);

  return (
    <div>
      {currentScreen === "home" ? <WelcomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
