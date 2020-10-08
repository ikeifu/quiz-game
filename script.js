var answerBtnEl = document.getElementById('answerBtn');;
var indexEl = document.getElementById('index');;
var indexBtnEl = document.getElementById('indexBtn');
var answerContainerEl = document.getElementById('answerContainer');
var questionEl = document.getElementById('question');
var answerBtn1El = document.getElementById('answerBtn1');
var answerBtn2El = document.getElementById('answerBtn2')
var answerBtn3El = document.getElementById('answerBtn3')
var answerBtn4El = document.getElementById('answerBtn4')
var currentQuestionIndex;
var availableQuestions = []
var currentQuestion = {}
var score = 0
indexBtn.addEventListener('click', function(){
  indexEl.classList.add('hide');
  answerContainerEl.classList.remove('hide');
  availableQuestions = [...questions];
  // availableAnswer = [...answer]
  currentQuestionIndex = 0;
  startQuestions();
})

function startQuestions(){
  currentQuestionIndex++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion=availableQuestions[questionIndex];
  questionEl.innerText = currentQuestion.question;
  var what =answerBtn1El.innerText = currentQuestion.text1;
  console.log(what)
  answerBtn2El.innerText = currentQuestion.text2;
  answerBtn3El.innerText = currentQuestion.text3;
  answerBtn4El.innerText = currentQuestion.text4;
}
function selectAnswer(){

}
// function startTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = "Time: " + secondsLeft;
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
    var questions = [
      {question: "What's my favorite color?", 
        text1: 'green', correct: true,
        text2: 'pink', correct: false,
        text3: 'purple', correct: false,
        text4: 'red', correct: false
      }, 
      {question: "What's my favorite food?", 
      answer: [
        {text1: 'steak', correct: false},
        {text2: 'lobster', correct: false},
        {text3: 'crab', correct: false},
        {text4: 'eel', correct: true}
      ]},
      {question: "What's my brothers name?", 
      answer: [
        {text1: 'Kevin', correct: false},
        {text2: 'Nathan', correct: false},
        {text3: 'David', correct: false},
        {text4: 'Kenneth', correct: true}
      ]},
      {question: "Where is my dad born?", 
      answer: [
        {text1: 'Peru', correct: false},
        {text2: 'England', correct: false},
        {text3: 'Venezuela', correct: true},
        {text4: 'Shanghai', correct: false}
      ]},
      {question: "Where is my mom from?", 
      answer: [
        {text1: 'Guangzhou', correct: false},
        {text2: 'Hong Kong', correct: true},
        {text3: 'Taiwan', correct: false},
        {text4: 'Shanghai', correct: false}
      ]},
      {question: "What is my preferred physical activity?", 
      answer: [
        {text1: 'Working Out', correct: false},
        {text2: 'Dancing', correct: true},
        {text3: 'Biking', correct: false},
        {text4: 'Running', correct: false}
      ]},
      {question: "What kind of games do I like playing?", 
      answer: [
        {text1: 'RPGS', correct: false},
        {text2: 'Action', correct: false},
        {text3: 'Sandbox', correct: false},
        {text4: 'MOBAS', correct: true}
      ]},
      {question: "What's my favorite source of entertainment?",
      answer: [
        {text1: 'Netflix', correct: false},
        {text2: 'Twitch', correct: true},
        {text3: 'Cable TV', correct: false},
        {text4: 'Amazon Videos', correct: false}
      ]},
      {question: "What's my favorite animal?", 
      answer: [
        {text1: 'dog', correct: false},
        {text2: 'cat', correct: true},
        {text3: 'snake', correct: false},
        {text4: 'furret', correct: false}
      ]},
      {question:"What do I value most in life?", 
      answer: [
        {text1: 'Freedom', correct: true},
        {text2: 'Stability', correct: false},
        {text3: 'Money', correct: false},
        {text4: 'Excitement', correct: false}
      ]}
    ]