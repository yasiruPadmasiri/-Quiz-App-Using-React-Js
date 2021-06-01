import axios from "axios"
import { useState } from "react"
import { Redirect } from "react-router"
import Teach from "../teacherIndex"
import {Link} from 'react-router-dom'



function CreateClass(){
    console.log(sessionStorage.getItem("email"))
    const[classValue,setClassValue]=useState(
        {
            grade:"",
            className:"",
            subject:"",
            email:sessionStorage.getItem("email"),
            isadd:"false",
        }
    )

    function saveGrade(event){

        setClassValue({
            ...classValue,
            isadd:false,
            grade:event.target.value,
        })
    }

    function saveSubject(event){
        setClassValue({
            ...classValue,
            isadd:false,
            subject:event.target.value
        })

    }
    function saveName(event){
        setClassValue({
            ...classValue,
            isadd:false,
            className:event.target.value
        })

    }
    function sumbits(){

        function redirection(){
            return (<>
                <Redirect to="/teacher" />
                 {console.log("ajshgjhgjhgasd")}       
                </>
                )
        }

        
        console.log("email is "+classValue.email)
        axios.post("http://localhost:8090/createClass",{
            classid:0,
            classname:classValue.className,
            grade: classValue.grade,
            subject:classValue.subject,
            email:classValue.email
        }).then(function(Response){
            console.log(Response)
            
        })
        setClassValue({
            ...classValue,
            isadd:true,
        })
        redirection()
        

    }

    return(
        <div>



<div class="wrapper d-flex align-items-stretch">
                <nav id="sidebar">
                    <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary">
	                </button>
                    </div>

                    <div class="img bg-wrap text-center py-4" style={{backgroundImage: "url(images/bg_1.jpg)"}}>
	  			        <div class="user-logo">
	  				        <div class="img" style={{backgroundImage: "url(images/logo.jpg)"}}></div>
	  				    <h3>Catriona Henderson</h3>
	  			    </div>
                    </div>

                    <ul class="list-unstyled components mb-5">
                        <li class="active">
                            <Link to="/teacher" ><span class="fa fa-home mr-3"></span> Home</Link>
                        </li>
                        <li>
                            <Link to="teacher/Classes"><span class="fa fa-download mr-3 notif"></span>Your Classes</Link>
                            {/* <small class="d-flex align-items-center justify-content-center">5</small> */}
                        </li>
                        <li>
                            <Link to="/teacher/CreateClass"><span class="fa fa-gift mr-3"></span>Create Class</Link>
                        </li>
                        <li>
                            <Link to="/teacher/AddStudents"><span class="fa fa-trophy mr-3"></span>Add Students</Link>
                        </li>
                        <li>
                            <Link to="/teacher/RemoveStudent" ><span class="fa fa-cog mr-3"></span>Remove Students</Link>
                        </li>
                        <li>
                            <Link to="/teacher/AboutStudent"><span class="fa fa-support mr-3"></span>About Student </Link>
                        </li>
                        <li>
                            <Link to="/" ><span class="fa fa-sign-out mr-3"></span> Login Out</Link>
                        </li>
                </ul>

                </nav>

                <div id="content" class="p-4 p-md-5 pt-5">

        <h2 class="mb-4">Home View</h2>

        <div class="login-form">
            {classValue.isadd==true?<h1 style={{backgroundColor:"gray",color:"green"}}>Class was added successfully</h1>:null}


                <form>
                <div class="mb-3">
                    <label  class="form-label">Enter the Grade</label>
                    <input type="email" onChange={saveGrade} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <label class="form-label">Enter the Subject</label>
                    <input type="text" onChange={saveSubject} class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Class Name </label>
                    <input type="text" onChange={saveName} class="form-control" id="exampleInputPassword1"></input>
                </div>
               

                <div class="mb-3 form-group">
                <a onClick={sumbits} class="btn btn-primary btn-block">Create Class</a>

                </div>

                

                </form>

            </div>


               

        </div>

    </div>  



















            


        </div>
    )
}
export default CreateClass