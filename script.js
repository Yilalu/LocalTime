
  function updateTime() {
    const container = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours();
    let timePeriod = "AM";
  
    if (hours >= 12) {
      hours -= 12;
      timePeriod = "PM";
    }

    if (hours == 0) {
      hours = 12;
    }

    if (hours >= 6 && hours < 10) {
      timePeriod = "ጥዋት";
    } else if (hours >= 10 && hours < 16) {
      timePeriod = "ሌሊት";
    } else if (hours >= 16 && hours < 22) {
      timePeriod = "ቀን";
    } else if (hours >= 22 || hours < 6) {
      timePeriod = "ምሽት";
    }

    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    let seconds = now.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    const time = hours + ":" + minutes + ":" + seconds + " " + timePeriod;
    container.textContent = time;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
