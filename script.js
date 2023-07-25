  // Function to update the timer
  function updateTimer() {
    // Get the current date and time
    const now = new Date();

    // Target date and time (replace these values with your desired date and time)
    const targetDate = new Date("2023-12-31T23:59:59");

    // Calculate the time remaining
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Format the date and time string
    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`;
    const formattedTime = `${targetDate.getHours()}:${targetDate.getMinutes()}:${targetDate.getSeconds()}`;

    // Update the <p> element with the formatted timer
    document.getElementById("timer").innerText = `${formattedDate}, ${formattedTime}`;
  }

  // Call the updateTimer function once to immediately show the timer
  updateTimer();

  // Update the timer every second
  setInterval(updateTimer, 1000);