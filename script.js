//Make a timer
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var indexEl = document.getElementById("indexPage")

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
timeEl.setAttribute("style", "text-align:right");
indexEl.setAttribute("style", " display: flex; text-align: center; justify-content: center; align-items: center;")
  setTime();
//Buttons that work for questions
//track your score
//Script that tells you right or wrong