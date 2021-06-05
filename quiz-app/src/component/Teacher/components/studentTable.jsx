import { useState,useEffect } from "react"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import AddStudentform from './addStudentForm'



function ClassCards(classes,index){
    

    var selectclassid;
    var isset=false

    

    function addmystudent(){
        <>
        <Link to="addstuform" />
        <AddStudentform></AddStudentform>
        </>
        console.log( classes.email)
        console.log( classes.classid)
        selectclassid=classes.classid;
       
        
        
    }
    
    return(
        <div>
                
        
            <div key={index} >
                <div key={index}  class="card" style={{width: "18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">{classes.classname}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"> Grade  {classes.grade}  {classes.subject} </h6>
                                    <p class="card-text">teacher,s Email is  {classes.email}</p>
                                    <Link to={{pathname:`/addstuform/${classes.classid}`}}  id={index} class="card-link">Add Students</Link>
                                </div>
                                </div>
                                
                    
            </div>
        
        </div>
    )

}

export default ClassCards