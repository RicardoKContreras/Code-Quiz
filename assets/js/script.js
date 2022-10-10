// Looks for the button and section class in the document
var buttonEl = document.querySelector("#start-quiz");
var questiontoanswerEl = document.querySelector("#question-to-answer");
var buttonQuestion2 = document.querySelector(".quiz-questions");
var initials = document.querySelector(".title-page");
var score = 0;
var IncorrectAnswer = score - 5;
var correctAnswer = + 5;

const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

    function upddateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        countdownEl.innerHTML =  `${minutes}: ${seconds}`;
        time--;
        if(time == minutes) {
            minutes = 0;
            clearInterval(time);
        }
    }
    

console.log(time);



// creates an element in the document and appends(attach) to the ul class
function makeQuestionAppear(yourQuestion, questionAnswer1,questionAnswer2,questionAnswer3,answerbtn1,answerbtn2,answerbtn3) {
    var initializeQuestion1El = document.createElement("h3");
    var answer1El = document.createElement("button");
    var answer2El = document.createElement("button");
    var answer3El = document.createElement("button");
    initializeQuestion1El.className = "myQuestions";
    initializeQuestion1El.textContent = yourQuestion;
    answer1El.className = answerbtn1;
    answer1El.textContent = questionAnswer1;
    answer2El.className = answerbtn2;
    answer2El.textContent = questionAnswer2;
    answer3El.className = answerbtn3;
    answer3El.textContent = questionAnswer3;
    questiontoanswerEl.appendChild(initializeQuestion1El);
   questiontoanswerEl.appendChild(answer1El);
   questiontoanswerEl.append(answer2El,answer3El);
   

}

function toRemoveChild(parent){
while(parent.firstChild){
    parent.removeChild(parent.firstChild);
    }
}






// finds the document that holds the button and adds an eventlistener of click to start the function "startTheQuiz"
buttonEl.addEventListener("click", function(){
    setInterval(upddateCountdown, 1000);
upddateCountdown();
    buttonEl.remove();
    makeQuestionAppear("What is Javascript?", "Javascript is one fo the core technologies used by programers", "potato", "something", "q1Answer-Btn1","q1Answer-Btn2","q1Answer-Btn3");
});

document.addEventListener('click',function(e){
    
    if(e.target && e.target.className == "q1Answer-Btn1"){
        toRemoveChild(questiontoanswerEl);
         var correct = document.createElement("h1");
         correct.textContent = "Correct!!";
         questiontoanswerEl.appendChild(correct);
         var newScore = score + correctAnswer;
         makeQuestionAppear("What is an array?", "Array is", "Love", "play","q2Answer-Btn1", "q2Answer-Btn2", "q2Answer-Btn3");
         console.log(newScore);
     }
     
     else if(e.target && (e.target.className == "q1Answer-Btn2" || e.target.className == "q1Answer-Btn3")) {
        toRemoveChild(questiontoanswerEl);
        var wrong = document.createElement("h1");
        wrong.textContent = "Incorrect!!";
        questiontoanswerEl.appendChild(wrong);
        makeQuestionAppear("What is an array?", "Array is", "Love", "play","q2Answer-Btn1", "q2Answer-Btn2", "q2Answer-Btn3");
        newScore = IncorrectAnswer;
    console.log(newScore); 
    }
    
     else if(e.target && (e.target.className == "q2Answer-Btn2" || e.target.className == "q2Answer-Btn3")) {
        toRemoveChild(questiontoanswerEl);
        var wrong = document.createElement("h1");
        wrong.textContent = "Incorrect!!";
        questiontoanswerEl.appendChild(wrong);
        makeQuestionAppear("What is the DOM?","An HTML  manipulated by javaScript.","Another name for Chrome", "My dog", "q3Answer-Btn1", "q3Answer-Btn2", "q3Answer-Btn3");
        newScore = IncorrectAnswer;
    }
     else if(e.target && e.target.className == "q2Answer-Btn1"){
        toRemoveChild(questiontoanswerEl);
         var correct = document.createElement("h1");
         correct.textContent = "Correct!!";
         questiontoanswerEl.appendChild(correct);
         makeQuestionAppear("What is the DOM?","An HTML  manipulated by javaScript.","Another name for Chrome", "My dog", "q3Answer-Btn1", "q3Answer-Btn2", "q3Answer-Btn3");
         var betterScore = newScore + correctAnswer;
         console.log(betterScore);
        }
     else if(e.target && (e.target.className == "q3Answer-Btn2" || e.target.className == "q3Answer-Btn3")) {
        toRemoveChild(questiontoanswerEl);
        var wrong = document.createElement("h1");
        wrong.textContent = "Incorrect!!";
        questiontoanswerEl.appendChild(wrong);

        
     }
     else if(e.target && e.target.className == "q3Answer-Btn1"){
        toRemoveChild(questiontoanswerEl);
         var correct = document.createElement("h1");
         correct.textContent = "Correct!!";
         questiontoanswerEl.appendChild(correct);
         score += 50;
         
        }

    });

    function scoreBoard(){
        var highScore = document.createElement("h3");
        var yourInitial = document.createElement("input");
        console.log(highScore);
        window.localStorage.setItem(highScore, yourInitial);
        var yourInitial = document.createElement("form");
         yourInitial.appendChild(initials);
    }
    scoreBoard();

