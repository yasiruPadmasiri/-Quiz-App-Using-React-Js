import axios from "axios"
import React, { useEffect, useState } from 'react';
import CreateCards from './classCards'
import {Link} from 'react-router-dom'



function AddStudents(){

    const[getmyclasses,setmyclasses]=useState([])

    var url="http://localhost:8090/getClases"
    var temail=sessionStorage.getItem("email");
    var takingClasses=[];
    var myClasses=[];
    var temail=sessionStorage.getItem("email");
    
    useEffect(()=>{

        async function getmyClasses(){
        var Resp=await axios.get(url, {
            params: {
              email: temail
            }
            })
            myClasses=Resp.data
             setmyclasses(myClasses)
           return  Resp.data
        } 
    
        getmyClasses();

    },[url]);


    
        
     
        
    // .then(function(Response){
    //     console.log(Response.data);
    //     takingClasses= Response.data
    //     console.log(takingClasses);    
    // })

    
    // takingClasses= getmyClasses()
    // console.log(takingClasses)
    console.log(getmyclasses);

    function Cards(classes,index){
        console.log("here "+index)
        console.log(classes.grade)
        var gradeis=classes.grade
        // setclsGrade(gradeis)
        return(    
            <div key={index}>
                
                
               <h2>{gradeis}</h2>
               <h2>{classes.grade}</h2>
               
            </div>
        )
    }
    ;
    // console.log(takingClasses)
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
                        <h1>
                            aaa
                        </h1>
                        {/* {
                            console.log(getmyclasses)
                        }

                    {console.log(takingClasses.length)} */}
                {getmyclasses.map((classes,index)=>(<div class= "col-md-5" key={index} > 
                    <div class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">{classes.classname}</h5>
                                <h6 class="card-subtitle mb-2 text-muted"> Grade  {classes.grade}  {classes.subject} </h6>
                                <p class="card-text">teacher,s Email is  {classes.email}</p>
                                <a href="#" class="card-link">Card link</a>
                                {/* <a href="#" class="card-link">Another link</a> */}
                            </div>
                            </div>
                    </div>
                    )
                    
                )}
               

        </div>

     </div>
         









{/* 
         <div>
             {setTimeout(function() {

                console.log("sadada")
                console.log(takingClasses)
                takingClasses.map(CreateCards)
                
                }, 5000)}
            </div> */}
        </div>
    )
}
export default AddStudents