import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Headers from './header'

import LoadQuiz from './component/Quiz'
import Loging from './login'
import App from './App'
import {BrowserRouter as router} from 'react-router-dom'



console.log(sessionStorage.getItem("role"));
ReactDOM.render(
  <div>
  
 
 {/* <Headers></Headers> */}
  <App></App>
  {/* <Loging></Loging> */}
  
  <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
  
  </div>
  

,document.getElementById("root"))

// console.log(sessionStorage.getItem("role"));

// if(sessionStorage.getItem("role")=="teacher"){

  
// ReactDOM.render(
//   <div><h1>General Knowlegde Quiz</h1>
//   <LoadQuiz></LoadQuiz>
  
//   </div>
  
// ,document.getElementById("root"))

// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
