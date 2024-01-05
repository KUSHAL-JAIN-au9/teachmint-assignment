export function startTimer(time, ispause) {
  let status = ispause;
  const [hours, min, seconds] = time.split(":");

  console.log(hours, min, seconds);

  // Function to update the timer display
  function updateTimer() {
    console.log(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );
  }

  function startTimer() {
    if (status) {
      console.log("Timer started");
      timerId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
        updateTimer();
      }, 1000);
      status = false;
    } else {
      console.log("Timer is already running");
    }
  }

  // Function to pause the timer
  function pauseTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
      console.log("Timer paused");
    } else {
      console.log("Timer is not running");
    }
  }

  return { startTimer, pauseTimer };
}
