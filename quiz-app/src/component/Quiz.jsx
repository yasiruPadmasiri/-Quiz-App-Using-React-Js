import { useState } from 'react';
import QuizData from '../QuizData'



var  quizNumber=0;
var score=0;


 function LoadQuiz(){
    const [questionIndex, setQuestionIndex] = useState(0);

    function nextquizGo(){
        if(questionIndex < 6){
            quizNumber++;
            setQuestionIndex(quizNumber);
        }else if(questionIndex>=6){
           
        }

        console.log("quiz number is "+quizNumber);
     
    }
    function selectAnswer(){
    
    }
    function AnswersList(answer,index){
        return <li key={index}>{answer}</li>
    }


     return(
     <div>
         <div className="col-md5">
            <button >Score : {score}</button>
         </div>

         <h2>{QuizData[questionIndex].question}</h2>

         {questionIndex < QuizData.length &&
            <div>
                {QuizData[questionIndex].options.map(AnswersList)}
            </div>
         }

        <div>
            <button className="btn btn-success" onClick={nextquizGo}>Next Question</button>
        </div>
         
     </div>)
 }
 export default LoadQuiz