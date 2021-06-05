import React, { useEffect } from "react";

import axios from 'axios'
import { useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import '../../../style.css'


function AddStudentform(){


 const classesid=useParams()
 const[showdetailform,setshowdetailform]=useState(false)

 useEffect(()=>{
     console.log("render")
 },[]
 )
 
 console.log(classesid.classes)

 function findstudent(){
    setshowdetailform(true)
 }

 function addtothclass(){
     setshowdetailform(false)

 }
    
  

    return (
        <div>
            <div class="login-form">

            <form>
                <div class="mb-3">
                    <label  class="form-label"> Enter Student Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div class="mb-3 form-group">
                <button onClick={findstudent} class="btn btn-primary btn-block">Find Student</button>
                </div>

            </form>
            
            </div>


        {showdetailform==false?

            <div class="login-form">
            <form>
                <h2>Student Details</h2>
                <div class="mb-3">
                    <label  class="form-label"><b>Enter Student Email address </b></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <label  class="form-label"><b>Enter Student Email address</b></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3 form-group">
                <button class="btn btn-primary btn-block">Find Student</button>
                </div>
                
                </form>

            </div>
        :
        null
        }


          
                

               


        </div>
    )

}

export default AddStudentform