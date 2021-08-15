import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import MyClassRoom from '../components/ClassRoom'


function YourClass(){
    sessionStorage.setItem("classid",true)

    var url="http://localhost:8090/getClases";
    var temail=sessionStorage.getItem("email");

    const[myset,setmyset]=useState(false)
    const[myclasses,setclasses]=useState([])

    useEffect(()=>{   
        console.log("render")

        async  function getAllClasses(){
            var Resp=await axios.get(url, {
                params: {
                  email: temail
                }
                })

        }


    },[myset])

    useEffect(()=>{
        console.log("scnd read")
    },[temail])



    function classCards(classes,index){
        function getclass(){

            sessionStorage.setItem("classid",classes.classid)

        }
        return(
            <div>
                
        
            <div key={index} >
                <div key={index}  class="card" style={{width: "18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Grade </h6>
                                    <p class="card-text">teacher,s Email is  </p>
                                    <button  id={index} onClick={getclass} class="card-link">Add Students</button>
                                </div>
                </div>
                                
                    
            </div>
        
        </div>
        )
    }

    
    function clks(){
        if(myset==true){
            setmyset(false);
        }
        else{
            setmyset(true)
        }
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

<button classNam="btn-btn-primary" onClick={clks}>clickhere</button>

{sessionStorage.getItem("classid")==null?
                
                <h1>chekin  null</h1> 
                :
                <div>

                <MyClassRoom></MyClassRoom>

                </div>
                }

               

        </div>

            </div>










        </div>
    )
}
export default YourClass