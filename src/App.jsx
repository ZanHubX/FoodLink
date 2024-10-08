import React, { useState } from "react";
import NavBar from "./components/Home/NavBar";
import Slider from "./components/Home/Slider";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

import Display from "./components/Home/Display";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`w-full p-4 ${isDarkMode ? "bg-slate-800" : "bg-white"}`}>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 bg-gray-300 rounded-full"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>
      {/* Pass isDarkMode prop */}
      <NavBar isDarkMode={isDarkMode} />
      <Slider />
      <Display/>
    </div>
  );
}

export default App;
