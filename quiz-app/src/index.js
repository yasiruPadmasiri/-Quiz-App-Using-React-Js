import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import LoadQuiz from './component/Quiz'
import Loging from './login'
import {BrowserRouter as router} from 'react-router-dom'

ReactDOM.render(
  <div><h1>General Knowlegde Quiz</h1>
  <br>
  </br>
  <LoadQuiz></LoadQuiz>
  
  <Loging></Loging>
  </div>
  

,document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
