var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Avni",
    score: 6,
  },

  {
    name: "Aditi",
    score: 6,
  },
]

// array of objects
var questions = [{
  question: "Which trek was shown in YJHD? ",
  answer: "Manali"
}, {
  question: "Which God idol Naina carries with her while going to Manali? ",
  answer: "Ganesha"
},
{
  question: " What does Lara come looking for in the train? ",
  answer: "Knife" 
},
{
  question:"Aditi is married to? ",
  answer: "Taran"
},
{
  question: "What is the name of the mountain(haunted), the trip guide mentions during the trek? ",
  answer: "Bhuta Parbat"
},
{
  question:" What is Bunny’s official name in the movie?  ",
  answer: "Kabir Thapar"
}]  

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "! Are you a fan of the movie YEH JAWANI HAI DEEWANI? Well, if you are Here's a quiz for you!");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();