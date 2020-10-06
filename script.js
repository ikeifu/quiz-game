//Make a timer
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var indexEl = document.getElementById("indexPage")
var startButtonEl = document.getElementById("startButton")
var questionContainerEl = document.getElementById("questionContainer")
var indexEl = document.getElementById("index")
startButtonEl.addEventListener('click', startGame)
function startGame() {
    startButtonEl.classList.add('hide')
    indexEl.classList.add('hide')
    questionContainerEl.classList.remove('hide')
}
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
function sendMessage() {
}
//Buttons that work for questions
//track your score
//Script that tells you right or wrong