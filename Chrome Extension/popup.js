const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const quoteText = document.getElementById("quote-text");
  quoteText.textContent = getRandomQuote();
}

document.addEventListener("DOMContentLoaded", function () {
  const getQuoteButton = document.getElementById("get-quote");
  if (getQuoteButton) {
    console.log("Button found");
    getQuoteButton.addEventListener("click", displayRandomQuote);
  } else {
    console.log("Button not found");
  }
});


displayRandomQuote();
// ... Your existing code ...

let timer;
let timerRunning = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function startPomodoroTimer() {
  console.log("efgj");
  if (!timerRunning) {
    timerRunning = true;
    const pomodoroTimer = document.getElementById("pomodoro-timer");
    let time = 25 * 60; // 25 minutes in seconds

    timer = setInterval(function () {
      pomodoroTimer.textContent = formatTime(time);

      if (time <= 0) {
        clearInterval(timer);
        timerRunning = false;
        // Handle the end of the Pomodoro session (e.g., play a sound, show a notification)
        alert("Pomodoro session is over!");
      } else {
        time--;
      }
    }, 1000);
  }
}

function resetPomodoroTimer() {
  clearInterval(timer);
  timerRunning = false;
  const pomodoroTimer = document.getElementById("pomodoro-timer");
  pomodoroTimer.textContent = "25:00"; // Reset to 25 minutes
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-pomodoro").addEventListener("click", startPomodoroTimer);
  document.getElementById("reset-pomodoro").addEventListener("click", resetPomodoroTimer);
  displayRandomQuote(); // Display a quote initially when the popup opens
});

document.addEventListener("DOMContentLoaded", function () {
  const getQuoteButton = document.getElementById("get-quote");
  if (getQuoteButton) {
    getQuoteButton.addEventListener("click", displayRandomQuote);
  }

  // Get a reference to the audio element
  const musicPlayer = document.getElementById("music-player");

  // Play the audio when a button is clicked
  document.getElementById("play-music").addEventListener("click", function () {
    musicPlayer.play();
  });

  // Pause the audio when another button is clicked
  document.getElementById("pause-music").addEventListener("click", function () {
    musicPlayer.pause();
  });

  displayRandomQuote(); // Display a quote initially when the popup opens
});