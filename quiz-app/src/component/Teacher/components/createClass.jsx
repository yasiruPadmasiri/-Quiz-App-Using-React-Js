import axios from "axios"
import { useState } from "react"
import { Redirect } from "react-router"
import Teach from "../teacherIndex"

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
            <h1>
                this is create class
            </h1>

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
    )
}
export default CreateClass