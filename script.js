  // Function to update the timer
  // function updateTimer() {
   
    const targetDate = new Date();

    const formattedDate = `${targetDate.getDate()}/${targetDate.getMonth() + 1}/${targetDate.getFullYear()}`;
    const formattedTime = `${targetDate.getHours()}:${targetDate.getMinutes()}:${targetDate.getSeconds()}`;

    // Update the <p> element with the formatted timer
    document.getElementById("timer").innerText = `${formattedDate}, ${formattedTime}`;
  // }

  // // Call the updateTimer function once to immediately show the timer
  // updateTimer();

  // // Update the timer every second
  // setInterval(updateTimer, 1000);