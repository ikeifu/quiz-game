var answerBtnEl = document.getElementById("answerBtn");
var indexEl = document.getElementById("index");
var indexBtnEl = document.getElementById("indexBtn");
var answerContainerEl = document.getElementById("answerContainer");
var questionEl = document.getElementById("question");
var answerBtn1El = document.getElementById("answerBtn1");
var answerBtn2El = document.getElementById("answerBtn2");
var answerBtn3El = document.getElementById("answerBtn3");
var answerBtn4El = document.getElementById("answerBtn4");
var titleTextEl = document.getElementById("titleText");
var secondTitleTextEl = document.getElementById("secondTitleText");
var timeEl = document.getElementById("counter");
var currentQuestionIndex;
var score = 0;
var secondsLeft = 60;
var submitButtonEl = document.getElementById('submitButton');
var userDataEl = document.getElementById('userData');
var formEl = document.getElementById('formHere');
var lastUserScoresEl = document.getElementById('lastUserScores');
var userList = [];
var timeoutEl = document.getElementById('timeout');
// var pastUsers = localStorage.getItem('userText').push(userList);
// var actualUserList = pastUsers + userList;
indexBtn.addEventListener("click", function () {
  indexEl.classList.add("hide");
  answerContainerEl.classList.remove("hide");
  currentQuestionIndex = 0;
  timeEl.classList.remove("hide");
  startQuestions();
  startTime();
});
answerBtn1El.addEventListener("click", function () {
  selectAnswer(currentQuestion.answer[0].correct);
});
answerBtn2El.addEventListener("click", function () {
  selectAnswer(currentQuestion.answer[1].correct);
});
answerBtn3El.addEventListener("click", function () {
  selectAnswer(currentQuestion.answer[2].correct);
});
answerBtn4El.addEventListener("click", function () {
  selectAnswer(currentQuestion.answer[3].correct);
});
submitButtonEl.addEventListener("click", function(e){
  e.preventDefault();
  var pastUsers = localStorage.getItem('userText');
  var userText = userDataEl.value.trim();
  userList.push(userText);
  userList.push(pastUsers);
  userDataEl.value = "";
  if (userText === ""){
    return;
  }
  renderUser();
  userDataEl.classList.add("hide");
  submitButtonEl.classList.add("hide");

  // var user = userDataEl.value;
  localStorage.setItem("userText", userText);
});
// function storeUserData() {
//   var user = document.getElementById('userData').value;
//   localStorage.setItem("user", user);
// }
function renderUser() {
  for (var i = 0; i < userList.length; i++) {
    var currentUser = userList[i];
    var li = document.createElement('ul');
    li.textContent = currentUser + ": " + score;
    li.setAttribute('data-index', i);
    lastUserScoresEl.appendChild(li);
  }
}
function startQuestions() {
  currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  answerBtn1El.innerText = currentQuestion.answer[0].text;
  answerBtn2El.innerText = currentQuestion.answer[1].text;
  answerBtn3El.innerText = currentQuestion.answer[2].text;
  answerBtn4El.innerText = currentQuestion.answer[3].text;
}
function endQuestions() {
  formEl.classList.remove("hide");
  answerContainerEl.classList.add("hide");
  // indexEl.classList.remove("hide");
  // titleTextEl.innerText = "Congratulations, you've finished!";
  // secondTitleTextEl.innerText = "You scored: " + score + "/" + questions.length;
  // indexBtnEl.innerText = "Play again!";
}
function selectAnswer(x) {
  if (x === true) {
    score++;
  } else {
    secondsLeft -= 5
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuestions();
  } else {
    startQuestions();
  }
}
function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      formEl.classList.remove('hide');
      answerContainerEl.classList.add("hide");
      timeoutEl.textContent = "You ran out of time!"
      // titleTextEl.innerText = "You've run out of time!";
      // secondTitleTextEl.innerText = "You scored: " + score + "/" + questions.length;
      // indexBtnEl.innerText = "Try again!"
      secondsLeft = 60
    } else if (currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
      timeEl.classList.add("hide");
      currentQuestionIndex = 0
      secondsLeft = 60
    }
  }, 1000);
}
var questions = [
  {
    question: "What's my favorite color?",
    answer: [
      { text: "green", correct: true },
      { text: "pink", correct: false },
      { text: "purple", correct: false },
      { text: "red", correct: false }
    ]
  },
  {
    question: "What's my favorite food?",
    answer: [
      { text: "steak", correct: false },
      { text: "lobster", correct: false },
      { text: "crab", correct: false },
      { text: "eel", correct: true }
    ]
  },
  {
    question: "What's my brothers name?",
    answer: [
      { text: "Kevin", correct: false },
      { text: "Nathan", correct: false },
      { text: "David", correct: false },
      { text: "Kenneth", correct: true }
    ]
  },
  {
    question: "Where is my dad born?",
    answer: [
      { text: "Peru", correct: false },
      { text: "England", correct: false },
      { text: "Venezuela", correct: true },
      { text: "Shanghai", correct: false }
    ]
  },
  {
    question: "Where is my mom from?",
    answer: [
      { text: "Guangzhou", correct: false },
      { text: "Hong Kong", correct: true },
      { text: "Taiwan", correct: false },
      { text: "Shanghai", correct: false }
    ]
  },
  {
    question: "What is my preferred physical activity?",
    answer: [
      { text: "Working Out", correct: false },
      { text: "Dancing", correct: true },
      { text: "Biking", correct: false },
      { text: "Running", correct: false }
    ]
  },
  {
    question: "What kind of games do I like playing?",
    answer: [
      { text: "RPGS", correct: false },
      { text: "Action", correct: false },
      { text: "Sandbox", correct: false },
      { text: "MOBAS", correct: true }
    ]
  },
  {
    question: "What's my favorite source of entertainment?",
    answer: [
      { text: "Netflix", correct: false },
      { text: "Twitch", correct: true },
      { text: "Cable TV", correct: false },
      { text: "Amazon Videos", correct: false }
    ]
  },
  {
    question: "What's my favorite animal?",
    answer: [
      { text: "dog", correct: false },
      { text: "cat", correct: true },
      { text: "snake", correct: false },
      { text: "furret", correct: false }
    ]
  },
  {
    question: "What do I value most in life?",
    answer: [
      { text: "Freedom", correct: true },
      { text: "Stability", correct: false },
      { text: "Money", correct: false },
      { text: "Excitement", correct: false }
    ]
  }
];
