
//question+answers
//all the questions are copied from https://quizlet.com/117039332/javascript-quiz-flash-cards/.
var queSet = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: ["<javascript>", "<head>", "<body>", "<script>"],
        correctAnswer: 3
    },
    {
        question: "What is the correct syntax for referring to an external script called \"script.js\"?",
        answer: ["<script src=\"script.js\">", "<script name=\"script.js\">", "<script src=\"href.js\">", "<script src=\"value.js\">"],
        correctAnswer: 0
    },
    {
        question: "How do you create a function?",
        answer: ["function:myFunction()", "function=myFunction()", "function myFunction()", "myFunction():function]"],
        correctAnswer: 2
    },
    {
        question: "How do you call a function named \"myFunction\"?",
        answer: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
        correctAnswer: 1
    },
    {
        question: "How many looping statements are there in JavaScript?",
        answer: ["1: for, do...until, for...of", "2: for, while, do...until,for...in", "3: for loop, while loop, do...while, for...in, for...of", "4: for, while, do...while, for...in, do...until"],
        correctAnswer: 2
    },
    {
        question: "How can you add single line comment in a JavaScript?",
        answer: ["//comment", "<!--comment-->", "/*comment", "'comment"],
        correctAnswer: 0
    },
    {
        question: "How does a \"for\" loop start for var x?",
        answer: ["for (i=0;i=<x.length;i++)", "for (i=0;i<x.length;i++)", "for (i=0;i<x.length)", "for (i=0&&i<x.length&&i++)"],
        correctAnswer: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answer: ["font", "styles", "class", "style"],
        correctAnswer: 3
    },
    {
        question: "What is the most optimal solution to generate a random whole number between 1 -10?",
        answer: ["Math.floor(Math.random()*(10-1))+1", "Math.round(Math.random()*(10-1))+1", "Math.floor(Math.random()*10)+1", "Math.round(Math.random()*10)+1"],
        correctAnswer: 0
    },
    {
        question: "In JavaScript, which of the following is not a logical operator?",
        answer: ["||", "&&", "%", "!"],
        correctAnswer: 2
    }
    ]
//declared variables
var secondsLeft = 10;
var thisRoundIndex = 0;
var clock;
const questions = document.getElementById ("question");
const choices = document.getElementById ("choices");
const results = document.getElementById ("results");
const time = document.getElementById ("time");
const buttonStart = document.getElementById ("startButton");
const gameOver = document.getElementById ("gameOver");
const finalTime = document.getElementById("finalTime");
//button
var userInfo = document.getElementById ("userInfo");
//input
var currentSeconds = parseInt(time.textContent);
var correctAnswer = queSet[thisRoundIndex].correctAnswer;
//event listeners
//start quiz
buttonStart.addEventListener("click", startTimer);
//start quiz Add Event Listener
function startTimer (event) {
    clock = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            // quiz finish
            finalScore=secondsLeft;
            clearInterval(clock);
            time.textContent = "Time's Up!";
            window.location.href = "./scoreBoard.html";
        }
    },1000);
    mainQuiz();
};
//running main quiz
function mainQuiz() {
    questions.innerHTML="";
    choices.innerHTML="";
    results.innerHTML="";
    var userQuestion = queSet[thisRoundIndex].question;
    var userChoices = queSet[thisRoundIndex].answer;
    var correctAns = queSet[thisRoundIndex].correctAnswer;
    questions.textContent = userQuestion;
    //calling choices
    for (i=0; i<userChoices.length; i++) {
        var buttonShell = document.createElement("div");
            buttonShell.setAttribute ("class", "clearfix");
        var liButton = document.createElement("button");
            liButton.textContent = queSet[thisRoundIndex].answer[i];
            liButton.setAttribute ("class", "btn btn-success");
            liButton.setAttribute ("data-index", i);
            liButton.addEventListener('click', userAnswer);
            choices.appendChild (buttonShell);
            buttonShell.appendChild(liButton);
            choices.appendChild(document.createElement("BR"));
    };
    //checking answer
    function userAnswer (event) {
        if (parseInt(this.dataset.index) === correctAns){
            secondsLeft = secondsLeft + 2;
            results.textContent = "Correct!";
            time.textContent = secondsLeft;
        }
        else if (parseInt(this.dataset.index) !== correctAns){
            secondsLeft = secondsLeft - 5;
            results.textContent = "Incorrect!";
            var showCorrectAns = document.createElement ("p")
            showCorrectAns.textContent = "The correct answer is " + userChoices[correctAns] + ".";
            results.appendChild(showCorrectAns);
            time.textContent = secondsLeft;
        }
        thisRoundIndex++;
    
        //last answer finishes quiz
        if (thisRoundIndex >= queSet.length) {
            clearInterval(clock);
            secondsLeft;
            donePage();
        } 
        else {
            setTimeout(mainQuiz,300);
        }
    }
};
//finished prompt
function donePage() {
    questions.innerHTML="";
    choices.innerHTML="";
    results.innerHTML="";
    gameOver.setAttribute ("style", "display:block");
    finalTime.textContent = secondsLeft;
    time.textContent = "You're done!";
    userInfo.addEventListener("click", recordScores);
    
};
//scoreboard prompt
function recordScores() {
    var name = document.getElementById ("userName").value;
    var userIn = name.trim();
    var scores =  JSON.parse(window.localStorage.getItem("finalScore")) || []

    if (userIn !== ""){
        var newUser = {
            score: secondsLeft,
            initials: userIn
          };
        scores.push(newUser);
        window.localStorage.setItem("finalScore", JSON.stringify(scores));
        window.location.href = "./scoreBoard.html";   
        };
}