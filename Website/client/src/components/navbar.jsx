import React, { useState } from "react";
import PomodoroTimer from "./pomodoro";
import YoutubeIntegration from "./YouTube";
import DailyFocusTodoList from "./Todo";
import DailyMotivationalQuote from "./quotes";

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
              onClick={() => handleElementClick("Daily Quotes")}
              className={`${
                selectedElement === "Daily Quotes"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Daily Quotes
            </button>
          </li>
          <li>
            <button
              onClick={() => handleElementClick("Placeholder")}
              className={`${
                selectedElement === "Placeholder"
                  ? "text-white font-bold"
                  : "text-gray-300"
              } hover:text-white px-3 py-2`}
            >
              Placeholder
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-4 px-6">
        {selectedElement === "Daily Focus" && <DailyFocusTodoList />}
        {selectedElement === "Pomodoro" && <PomodoroTimer />}
        {selectedElement === "Music" && <YoutubeIntegration />}
        {selectedElement === "Daily Quotes" && <DailyMotivationalQuote />}
        {selectedElement === "Placeholder 2" && <h1>Placeholder 2 Content</h1>}
      </div>
    </div>
  );
};

export default Navbar;
