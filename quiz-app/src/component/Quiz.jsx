import { useState } from 'react';
import QuizData from '../QuizData'



var  quizNumber=0;
var score=0;
var isSelect=false


 function LoadQuiz(){
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswer,setUserAnswer]=useState(" ");
    const [buttonColor,setCoulor]=useState(
        {backgroundColor:"green",
        margin:10,
        textAlign:'center'            
        })
        const [score,setScore]=useState(0)


    function perviousquiz(){
        if(questionIndex>0){
            quizNumber--;
            setQuestionIndex(quizNumber);
        }
    }

    function nextquizGo(){
        var newScore=0;
        if(questionIndex < 6){
            quizNumber++;
            setQuestionIndex(quizNumber);
            console.log(questionIndex);
            if(userAnswer==QuizData[questionIndex].answer){
                newScore=score+10;
                setScore(newScore);
            }
        }

        console.log("quiz number is "+quizNumber);
     
    }
    function selectAnswer(){
    
    }

    

    function AnswersList(answer,index){

        function changecolor(){
            console.log("clicked answer si "+answer)
            setUserAnswer(answer);
            setCoulor({backgroundColor:"white"})
            console.log("user answer is " +QuizData[questionIndex].answer);
        

        }

        return (
            <div key={index}>
        <button onClick={changecolor} style={buttonColor} key={index}>{answer}</button>
        </div>
       
        )
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
            <button className="btn btn-success" style={{margin:20}} onClick={nextquizGo}>Next Question</button>
            <button className="btn btn-danger" style={{margin:50}} onClick={perviousquiz}>Previous Question</button>
        </div>
         
     </div>)
 }
 export default LoadQuiz