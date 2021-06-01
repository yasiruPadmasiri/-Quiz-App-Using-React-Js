import { useState } from 'react';

import './style.css'

import Teach from './component/Teacher/teacherIndex'
import axios from 'axios'
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'
import QuizData from './QuizData';
import LoadQuiz from'./component/Quiz'


function Login(){
    const[logingValue,setLoginValue]=useState({
        email:"",
        password:"gggg",
        success:false,
        role:""
    })
    var getLogins;
    const[getLogin,saveLoging]=useState({
        userid: 0,
        email:"",
        password:"",
    })

    

    function saveEmail(event){
        console.log(event.target.value+" email address");
        setLoginValue({
            ...logingValue,
            email:event.target.value
        })
        console.log(logingValue.email+ logingValue.password+"    loging values ");
    }

    function savePassword(event){

        setLoginValue(
            {
                ...logingValue,
                password:event.target.value,
            }
        )
        console.log(logingValue.email + " sssss "+logingValue.password)
    }

    function saveRole(event){
        setLoginValue({
            ...logingValue,
            role:event.target.value
        })

    }

    function sumbits(){

        if(logingValue.role=="teacher"){

            axios.get("http://localhost:8090/loginTeacher") 
            .then(function(Response){ 
                getLogins=Response.data
                
                getLogins.forEach(user => {
                    if((user.email==logingValue.email)&&(user.password==logingValue.password)){
                        console.log("oo")
                        if(user.role=="teacher"){
                            sessionStorage.setItem("role","teacher")
                            sessionStorage.setItem("email",user.email)
                          setLoginValue(
                              {
                                  ...logingValue,
                                  role:"teacher",
                                  success:true
                              }
                          )
                          sessionStorage.setItem("Inlogin",false)
                          console.log("oo")
                         redirections()
                        }
                        else if(user.role=="student"){
                            sessionStorage.setItem("role","student")
                            setLoginValue(
                                {
                                    ...logingValue,
                                    role:"student",
                                    success:true
                                }
                            )
                            sessionStorage.setItem("Inlogin",false)
                        }
                    }
                     
                });
                

            })

        }   // to check after sure these work but  i can optimize this
        else if(logingValue.role=="student"){
            axios.get("http://localhost:8090/loginStudent") 
            .then(function(Response){ 
                getLogins=Response.data
                
                getLogins.forEach(user => {
                    if((user.email==logingValue.email)&&(user.password==logingValue.password)){
                        console.log("oo")
                        if(user.role=="teacher"){
                            sessionStorage.setItem("role","teacher")
                            sessionStorage.setItem("email",user.email)
                          setLoginValue(
                              {
                                  ...logingValue,
                                  role:"teacher",
                                  success:true
                              }
                          )
                          sessionStorage.setItem("Inlogin",false)
                          console.log("oo")
                         redirections()
                        }
                        else if(user.role=="student"){
                            sessionStorage.setItem("role","student")
                            setLoginValue(
                                {
                                    ...logingValue,
                                    role:"student",
                                    success:true
                                }
                            )
                            sessionStorage.setItem("Inlogin",false)
                        }
                    }
                    
                });
                

            })

        }
       



          
    }

    
    function redirections(){

        if(logingValue.success==true&&logingValue.role=="teacher"){
            console.log("test 1 "+  logingValue.success);
            return (<>
                <Redirect to="/Quiz" />
                {             console.log("test 1ghfh "+  logingValue.success)}
                <LoadQuiz></LoadQuiz>
                
        
                </>

                
                
                )
            
        
        }


    }

    return(
        
      

        
        <div class="login-form">
            {sessionStorage.setItem("Inlogin",true)}
            {sessionStorage.setItem("Inlogin",true)}

            {logingValue.success==true?
           <div>
               {logingValue.role=="teacher"?
               <>
               <Redirect to="/teacher" />
               {             console.log("test 1 "+  logingValue.success)}
             
               
       
               </>
               :
               <>
               <Redirect to="/Quiz" />
               {             console.log("test 1ghfh "+  logingValue.success)}
               <LoadQuiz></LoadQuiz>
               
       
               </>}
           </div>
          
                
                :<form >
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" onChange={saveEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Role</label>
                    <select type="text" onChange={saveRole} class="form-control" id="exampleInputPassword1">
                        <option aria-disabled >Select Role</option>
                        <option value="teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" onChange={savePassword} class="form-control" id="exampleInputPassword1"></input>
                </div>

               
                <div class="mb-3 form-group">
                <a onClick={sumbits} class="btn btn-primary btn-block">Submit</a>

                </div>
        <div class="clearfix">
                 <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                 <br></br>
                 <Link to="/signIn">Sign In</Link>
                 <br></br>
                 <Link to="/reset">Forgot Password?</Link>
        </div> 
            </form>}
        </div>
   


    )
}

export default Login 
