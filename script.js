//Make a timer
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var indexEl = document.getElementById("index");
var startButtonEl = document.getElementById("startButton");
var questionContainerEl = document.getElementById("questionContainer");
var indexEl = document.getElementById("index");
var answerButtonEl = document.querySelectorAll("#answerButton");
startButtonEl.addEventListener('click', startGame)
function startGame() {
    startButtonEl.classList.add('hide');
    indexEl.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    console.log(answerButtonEl)
    setNextQuestion();
    startTime();
}
function setNextQuestion() {
    var questionnaire = [
      {q1: "What's my favorite color?", 
      a1: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]}, 
      {q2: "What's my favorite food?", 
      a2: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q3: "What's my brothers name?", 
      a3: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q4: "Where is my dad born?", 
      a4: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q5: "Where is my mom from?", 
      a5: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q6: "What is my preferred physical activity?", 
      a6: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q7: "What kind of games do I like playing?", 
      a7: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q8: "What's my favorite source of entertainment?",
       a8: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q9: "What's my political affiliation?", 
      a9: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]},
      {q10:"What do I value most in life?", 
      a10: [
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: },
        {text: '', correct: }
      ]}
    ]
}
function startTime() {
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
  var timeUp = "Time's up!"
  return timeUp
}
//Buttons that work for questions
//track your score
//Script that tells you right or wrong