// Set the target date and time for the countdown
const targetDate = new Date("December 31, 2024 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the results in the HTML elements
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  // If the countdown is complete, display a message
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "Countdown Complete!";
  }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
