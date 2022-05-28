// Looks for the button and section class in the document
var buttonEl = document.querySelector("#start-quiz");
var questiontoanswerEl = document.querySelector("#question-to-answer");
var buttonQuestion2 = document.querySelector(".quiz-questions");



// creates an element in the document and appends(attach) to the ul class
var startTheQuiz = function(){
    var initializeQuestion1El = document.createElement("h3");
    var answer1El = document.createElement("button");
    var answer2El = document.createElement("button");
    var answer3El = document.createElement("button");
    initializeQuestion1El.className = "question-number";
    initializeQuestion1El.textContent = "Question 1: What is javascript?";
    answer1El.className = "answer1-btn";
    answer1El.textContent = "A script of java.";
    answer2El.className = "answer2-btn";
    answer2El.textContent = "A script of .";
    answer3El.className = "answer3-btn";
    answer3El.textContent = "A script of java3.";
    questiontoanswerEl.appendChild(initializeQuestion1El);
   questiontoanswerEl.appendChild(answer1El);
   questiontoanswerEl.append(answer2El,answer3El);
   
   
    
        
        
       
           

                 
    
        
   


}



// finds the document that holds the button and adds an eventlistener of click to start the function "startTheQuiz"
buttonEl.addEventListener("click", startTheQuiz);

buttonQuestion2.addEventListener("click", function(){
    var Q2 = document.querySelector(".question-number");

    
    Q2.textContent = "Question 2: What is array?";
   var read = document.createElement("button");
    read.className = "answer22-1button";
    read.textContent = "this is button";
    questiontoanswerEl.remove(answer1El);
    questiontoanswerEl.append(read); 
    

});

