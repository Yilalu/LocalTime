
  function updateTime() {
    const container = document.getElementById('time');
    const now = new Date();
    let hours = now.getHours() + 1;
    let timePeriod = "AM";
    const geezNumber = 0;
  
    if (hours >= 12) {
      hours -= 12;
      timePeriod = "PM";
    }

    if (hours == 0) {
      hours = 12;
    }
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

    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    let seconds = now.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    const time = englishToGeezNumber(hours) + ":" + englishToGeezNumber(minutes) + ":" + englishToGeezNumber(seconds) + " " + timePeriod;
    container.textContent = time;
  }
  
  function englishToGeezNumber(number) {
    const geezNumbers = {
      '0': '', '1': '\u1369', '2': '\u136A', '3': '\u136B', '4': '\u136C',
      '5': '\u136D', '6': '\u136E', '7': '\u136F', '8': '\u1370', '9': '\u1371'
    };
    const tens = {
      '10': '\u1372', '20': '\u1373', '30': '\u1374', '40': '\u1375',
      '50': '\u1376', '60': '\u1377', '70': '\u1378', '80': '\u1379', '90': '\u137A'
    };
    let result = '';
    let num = parseInt(number);
    if (num >= 100) {
      let hundreds = Math.floor(num / 100);
      result += geezNumbers[hundreds] + '\u1373'; // add the hundred symbol
      num %= 100;
    }
    if (num >= 10) {
      let tensPlace = Math.floor(num / 10) * 10;
      result += tens[tensPlace.toString()];
      num %= 10;
    }
    if (num > 0) {
      result += geezNumbers[num.toString()];
    }
    return result;
  }
  updateTime();
  setInterval(updateTime, 1000);
