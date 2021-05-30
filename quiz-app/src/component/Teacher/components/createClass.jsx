import axios from "axios"
import { useState } from "react"

function CreateClass(){
    console.log(sessionStorage.getItem("email"))
    const[classValue,setClassValue]=useState(
        {
            grade:"",
            className:"",
            subject:"",
            email:sessionStorage.getItem("email")
        }
    )

    function saveGrade(event){

        setClassValue({
            ...classValue,
            grade:event.target.value,
        })
    }

    function saveSubject(event){
        setClassValue({
            ...classValue,
            subject:event.target.value
        })

    }
    function saveName(event){
        setClassValue({
            ...classValue,
            className:event.target.value
        })

    }
    function sumbits(){

        
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

    }

    return(
        <div>
            <h1>
                this is create class
            </h1>

            <div class="login-form">

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