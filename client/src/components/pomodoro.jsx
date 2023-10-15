import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [timer, setTimer] = useState(null);

  const startTimer = (newTime) => {
    clearInterval(timer);
    setTime(newTime);
    setTimer(setInterval(() => setTime((prevTime) => prevTime - 1), 1000));
  };

  const pauseTimer = () => {
    clearInterval(timer);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTime(1500);
  };

  const displayTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timer);
      alert("Time is up!");
    }
  }, [time]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="timer-container border-2 border-gray-800 rounded p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
        <div className="timer bg-blue-500 text-white font-bold text-4xl p-4 rounded mb-4">
          {displayTime()}
        </div>
        <div className="mb-4 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => startTimer(1500)}
          >
            Work (25 min)
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => startTimer(300)}
          >
            Short Break (5 min)
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => startTimer(900)}
          >
            Long Break (15 min)
          </button>
        </div>
        <div className="mb-4">
          <input
            type="number"
            id="workTime"
            min="1"
            max="60"
            defaultValue="25"
            className="border-2 border-gray-800 rounded p-2 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              startTimer(document.getElementById("workTime").value * 60)
            }
          >
            Start Work
          </button>
        </div>
        <div>
          <input
            type="number"
            id="breakTime"
            min="1"
            max="60"
            defaultValue="5"
            className="border-2 border-gray-800 rounded p-2 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              startTimer(document.getElementById("breakTime").value * 60)
            }
          >
            Start Break
          </button>
        </div>
        <div className="mt-4 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={pauseTimer}
          >
            Pause
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
