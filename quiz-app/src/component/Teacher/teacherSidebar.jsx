import { useState } from 'react'
import './css/style.css'
import CreateClass from './components/createClass'
import Home from './components/home'
import  AboutStudents from './components/aboutStudent'
import  AddStudents from './components/addStudents'
import RemoveStudents from './components/removeStudents'
import YourClass from './components/yourClass'
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom'
 


function TsideBar(){
    const[clickFunction,setClickFunction]=useState("");

    return(
        <div>
            {/* <h2>teacherSidebar</h2> */}


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
                        <li class="active">
                            <Link to="/teacher/Classes"><span class="fa fa-download mr-3 notif"></span>Your Classes</Link>
                            {/* <small class="d-flex align-items-center justify-content-center">5</small> */}
                        </li>
                        <li>
                            <Link to="/teacher/CreateClass"><span class="fa fa-gift mr-3"></span>Create Class</Link>
                        </li>
                        <li>
                            <Link to="teacher/AddStudents"><span class="fa fa-trophy mr-3"></span>Add Students</Link>
                        </li>
                        <li>
                            <Link to="teacher/RemoveStudent" ><span class="fa fa-cog mr-3"></span>Remove Students</Link>
                        </li>
                        <li>
                            <Link to="teacher/AboutStudent"><span class="fa fa-support mr-3"></span>About Student </Link>
                        </li>
                        <li>
                            <Link to="/" ><span class="fa fa-sign-out mr-3"></span> Login Out</Link>
                        </li>
                </ul>

                </nav>

                <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">Home View</h2>


               

        </div>

            </div>    
        </div>
    )
}
export default TsideBar