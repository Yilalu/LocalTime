function updateTime() {
    const container = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours() + 1;
    let timePeriod;
  
    if (hours >= 23 || hours < 5) {
      timePeriod = "ጥዋት";
    } else if (hours >= 5 && hours < 10) {
      timePeriod = "ሌሊት";
    } else if (hours >= 10 && hours < 16) {
      timePeriod = "ምሽት";
    } else if (hours >= 17 && hours < 23) {
      timePeriod = "ቀን";
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
  