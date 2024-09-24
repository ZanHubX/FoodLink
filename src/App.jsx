import React, { useState } from "react";
import NavBar from "./components/Home/NavBar";
import Slider from "./components/Home/Slider";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`w-full p-4 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
      <button onClick={() => setIsDarkMode(!isDarkMode)} className="mb-4">
        Dark Mode
      </button>
      <NavBar />
      <Slider />
    </div>
  );
}

export default App;
