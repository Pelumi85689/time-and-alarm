let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let alarmHour = document.getElementById("alarmHour");
let alarmMinutes = document.getElementById("alarmMinutes");
let display = document.getElementById("alarm-set");
let audio= document.getElementById("play-audio");

 
function time() {
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    alarmHour.value = alarmHour.value; 
    alarmMinutes.value = alarmMinutes.value; 

    if (seconds.innerHTML < 10) {
    seconds.innerHTML = "0" + seconds.innerHTML;
    }
    if (minutes.innerHTML < 10) {
    minutes.innerHTML = "0" + minutes.innerHTML;
    }
    if (hours.innerHTML < 10) {
    hours.innerHTML = "0" + hours.innerHTML;
    }
    let currentTime = hours + ":" + minutes + ":" + seconds + "";
    time.innerHTML = currentTime;
  }

  setInterval(time, 1000);

  function setAlarm() {
    alarmHour.value = alarmHour.value;
    alarmMinutes.value = alarmMinutes.value;
    display.innerHTML = ("Alarm set to " + alarmHour.value + ":" + alarmMinutes.value);
    function alarmTime() {
    if(hours.innerHTML === alarmHour.value && minutes.innerHTML === alarmMinutes.value) {
      display.innerHTML = ("Alarm ringing...");
      audio.play();
    }
    else if(minutes.innerHTML > alarmMinutes.value) {
      setTimeout(() => {
        display.innerHTML = ("Alarm stopped...");
      audio.pause();
      }, 60000);
    }
  }
  setInterval(alarmTime, 1000);
  }