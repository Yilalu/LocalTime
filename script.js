
function updateTime() {
  // Get the container element with id 'time'
  const container = document.getElementById('time');
  
   var EthioTimeInGeez = new Date().toLocaleString("en-US", {timeZone: "Africa/Addis_Ababa" });
  
  // Create a new Date object for the current time
  const now = new Date(EthioTimeInGeez);
  
  // Get the hours from the Date object and add 1 (to adjust for Ethiopian time)
  let hours = now.getHours() - 6;
  
  // Set a default time period of "AM" and a Geez number of 0
  let timePeriod = "AM";
  let geezNumber = 0;

  // If the hours are greater than or equal to 12, subtract 12 and set the time period to "PM"
  if (hours >= 12) {
    hours -= 12;
    timePeriod = "PM";
  }

  // If the hours are 0, set them to 12
  if (hours == 0) {
    hours = 12;
  }

  // Set the Geez number based on the hours
  if(hours == 4)
    geezNumber = four;
  if (hours >= 6 && hours < 10) {
    timePeriod = "ሌሊት";
  } else if (hours >= 10 && hours < 16) {
    timePeriod = "ጥዋት";
  } else if (hours >= 16 && hours < 22) {
    timePeriod = "ቀን";
  } else if (hours >= 22 || hours < 6) {
    timePeriod = "ምሽት";
  }

  // Get the minutes from the Date object
  let minutes = now.getMinutes();
  
  // If the minutes are less than 10, add a leading 0
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Get the seconds from the Date object
  let seconds = now.getSeconds();
  
  // If the seconds are less than 10, add a leading 0
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Convert the English time to Geez numbers and format the time string
  const time = englishToGeezNumber(hours) + ":" + englishToGeezNumber(minutes) + ":" + englishToGeezNumber(seconds) + " " + timePeriod;
  
  // Set the text content of the container element to the formatted time string
  container.textContent = time;
}

// Function to convert English numbers to Geez numbers
function englishToGeezNumber(number) {
  // Object mapping English numbers to Geez numbers
  const geezNumbers = {
    '0': '', '1': '\u1369', '2': '\u136A', '3': '\u136B', '4': '\u136C',
    '5': '\u136D', '6': '\u136E', '7': '\u136F', '8': '\u1370', '9': '\u1371'
  };
  
  // Object mapping tens places to Geez numbers
  const tens = {
    '10': '\u1372', '20': '\u1373', '30': '\u1374', '40': '\u1375',
    '50': '\u1376', '60': '\u1377', '70': '\u1378', '80': '\u1379', '90': '\u137A'
  };
  
  // Initialize result variable to an empty string
  let result = '';
  // Convert input number to an integer
  let num = parseInt(number);
  // If the input number is greater than or equal to 100, add the corresponding geez number for the hundreds place
  if (num >= 100) {
    let hundreds = Math.floor(num / 100);
    result += geezNumbers[hundreds] + '\u1373'; // add the hundred symbol
    num %= 100; // remove the hundreds place from the input number
  }
  // If the input number is greater than or equal to 10, add the corresponding geez number for the tens place
  if (num >= 10) {
    let tensPlace = Math.floor(num / 10) * 10;
    result += tens[tensPlace.toString()];
    num %= 10; // remove the tens place from the input number
  }
  // If the input number is greater than 0, add the corresponding geez number for the ones place
  if (num > 0) {
    result += geezNumbers[num.toString()];
  }
  // Return the final result
  return result;
}
// Call updateTime function once at the beginning to set the initial time display
updateTime();
// Call updateTime function every 1000 milliseconds (i.e. every second) to update the time display
setInterval(updateTime, 1000);
