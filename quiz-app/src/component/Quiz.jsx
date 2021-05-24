import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import QuizData from '../QuizData'



var  quizNumber=0;
var score=0;

// const [quizNumber,setQuizNmber]=useState(0);

var answer=QuizData[quizNumber].answer;
var answers=QuizData[quizNumber].options


function nextquizGo(){
    quizNumber++;
    console.log("quiz number is "+quizNumber);
   LoadQuiz();
 
}
function selectAnswer(){

}

function AnswersList(answers){
    console.log(quizNumber);
    console.log(answers)
    
    return(
        <div>
            <ul>
                <li onClick={selectAnswer}><button>{answers}</button></li>
            </ul>
        </div>
    )
}

 function LoadQuiz(){
     var x=0;
     x++;
     console.log(x);
     console.log(QuizData[quizNumber].question)
     console.log(answer);
     console.log(QuizData[quizNumber].options)
     return(<div>
         <div className="col-md5">
            <button readonly>Score : {score}</button>
         </div>
         <h2>{QuizData[quizNumber].question}</h2>
   {answers.map(AnswersList)}
   <div>
       <button className="btn btn-success" onClick={nextquizGo}>Next Question</button>
       
   </div>
         
     </div>)
 }
 export default LoadQuiz
