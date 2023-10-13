import React, { useState } from "react";
import PomodoroTimer from "./pomodoro";

const Navbar = () => {
  const [selectedElement, setSelectedElement] = useState("Daily Focus");

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <ul className="flex justify-between items-center py-4 px-6">
          <li>
            <button
              onClick={() => handleElementClick("Daily Focus")}
              className={`${
                selectedElement === "Daily Focus"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Daily Focus
            </button>
          </li>
          <li>
            <button
              onClick={() => handleElementClick("Pomodoro")}
              className={`${
                selectedElement === "Pomodoro"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Pomodoro
            </button>
          </li>
          <li>
            <button
              onClick={() => handleElementClick("Music")}
              className={`${
                selectedElement === "Music"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Music
            </button>
          </li>
          <li>
            <button
              onClick={() => handleElementClick("Placeholder 1")}
              className={`${
                selectedElement === "Placeholder 1"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Placeholder 1
            </button>
          </li>
          <li>
            <button
              onClick={() => handleElementClick("Placeholder 2")}
              className={`${
                selectedElement === "Placeholder 2"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Placeholder 2
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-4 px-6">
        {selectedElement === "Daily Focus" && <h1>Daily Focus Content</h1>}
        {selectedElement === "Pomodoro" && <PomodoroTimer />}
        {selectedElement === "Music" && <h1>Music Content</h1>}
        {selectedElement === "Placeholder 1" && <h1>Placeholder 1 Content</h1>}
        {selectedElement === "Placeholder 2" && <h1>Placeholder 2 Content</h1>}
      </div>
    </div>
  );
};

export default Navbar;
