"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Joe Duran
      Date: 04/09/2025

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID; //#3 -182

//step 4
let questionList = document.querySelectorAll("div#quiz input"); //#4-168


//step 5
startQuiz.onclick = function () {
   overlay.class ="showquiz" //#pg182 figure 5-22
   timeID = windows.setInterval (countdown,1000);
}

function countdown() {
if (timeLeft==0){
   clearInterval(timeID) //6A
   
   let totalCorrect = checkAnswers() //6B

   if (totalCorrect==correctAnswers.length)
   {
      window.alert('Congrats! You got 100')
   }
   else //step 6c
   {
      timeLeft = quizTime 
      quizClock.value = timeLeft
       overlay.className = "hidequiz"
     
      
       window.alert('You answered corect' +totalCorrect+
            'out of' +correctAnswers.length+ 'questions')
         
   }

}
else { //step 7
   timeLeft --;
   quizClock.value = timeLeft
}
}


















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

