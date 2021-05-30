import { useState } from 'react'
import './css/style.css'
import CreateClass from './components/createClass'
import Home from './components/home'
import  AboutStudents from './components/aboutStudent'
import  AddStudents from './components/addStudents'
import RemoveStudents from './components/removeStudents'
import YourClass from './components/yourClass'
 


function TsideBar(){
    const[clickFunction,setClickFunction]=useState("");

    function createClass(){
        setClickFunction("createClass");
    }
    function Homes(){
        setClickFunction("Home")
    }
    function yourClass(){
        setClickFunction("yourClass");
    }
    function addStudent(){
        setClickFunction("addStudents");
    }
    function removeStudent(){
        setClickFunction("removeStudent")
    }
    function aboutStudents(){
        setClickFunction("aboutStudents");
    }
    function logOut(){
        setClickFunction("logOut");
    }



    
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
                            <a href="#" onClick={Homes}><span class="fa fa-home mr-3"></span> Home</a>
                        </li>
                        <li>
                            <a href="#" onClick={yourClass}><span class="fa fa-download mr-3 notif"></span>Your Classes</a>
                            {/* <small class="d-flex align-items-center justify-content-center">5</small> */}
                        </li>
                        <li>
                            <a href="#" onClick={createClass} ><span class="fa fa-gift mr-3"></span>Create Class</a>
                        </li>
                        <li>
                            <a href="#"onClick={addStudent}><span class="fa fa-trophy mr-3"></span>Add Students</a>
                        </li>
                        <li>
                            <a href="#"onClick={removeStudent}><span class="fa fa-cog mr-3"></span>Remove Students</a>
                        </li>
                        <li>
                            <a href="#"onClick={aboutStudents}><span class="fa fa-support mr-3"></span>About Student </a>
                        </li>
                        <li>
                            <a href="#" onClick={logOut
                            }><span class="fa fa-sign-out mr-3"></span> Login Out</a>
                        </li>
                </ul>

                </nav>

                <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">body</h2>


                {clickFunction=="createClass"?
                <CreateClass></CreateClass>:null
                }
                {clickFunction=="Home"?<Home></Home>:null}
                {clickFunction=="yourClass"?<YourClass></YourClass>:null}
                {clickFunction=="addStudents"?<AddStudents></AddStudents>:null}

        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      </div>

            </div>    
        </div>
    )
}
export default TsideBar