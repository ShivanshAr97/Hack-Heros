import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [timer, setTimer] = useState(null);

  const startTimer = (newTime) => {
    clearInterval(timer);
    setTime(newTime);
    setTimer(setInterval(() => setTime((prevTime) => prevTime - 1), 1000));
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
    <div className=" min-h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="timer-container border-solid border-2 border-gray-800 rounded p-2 flex-col items-center ">
        <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
        <div className="timer bg-blue">{displayTime()}</div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
            onClick={() => startTimer(1500)}
          >
            Work (25 min)
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
            onClick={() => startTimer(300)}
          >
            Short Break (5 min)
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
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
            className="input-field"
          />
          <button
            className="btn"
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
            className="input-field"
          />
          <button
            className="btn"
            onClick={() =>
              startTimer(document.getElementById("breakTime").value * 60)
            }
          >
            Start Break
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
