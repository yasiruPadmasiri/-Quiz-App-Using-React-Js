import axios from 'axios'
import { useState } from 'react'
import {Link} from 'react-router-dom'

import './style.css'

function SignIn(){

    const[signDetails,setSignDetails]=useState(
        {
            fname:"",
            lname:"",
            email:"",
            password:"",
            reEnterpw:"",
            role:""

        }
    )

    function saveEmail(event){
        setSignDetails({
            ...signDetails,
            email:event.target.value

        })

    }

    function savePassword(event){
        setSignDetails({
            ...signDetails,
            password:event.target.value,
        })
    }

    function saveFaname(event){
        setSignDetails({
            ...signDetails,
            fname:event.target.value,
        })
    }
    function saveLname(event){
        setSignDetails({
            ...signDetails,
            lname:event.target.value
        })
    }
    function saveREPassword(event){
        setSignDetails({
            ...signDetails,
            reEnterpw:event.target.value,
        })
    }
    function saveRole(event){
        setSignDetails({
            ...signDetails,
            role:event.target.value
        })
    }
    function sumbits(){
        console.log(signDetails)
        axios.post("http://localhost:8090/signIn",{
            userid:0,
            email:signDetails.email,
            fname:signDetails.fname,
            lname:signDetails.lname,
            password:signDetails.password,
            role:signDetails.role
        }).then(function(Response){
            console.log(Response)
        })
    }
    return(
        <div>
            <div class="login-form">

                <form>
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" onChange={saveEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>

                <div class="mb-3">
                    <label class="form-label">Fist Name</label>
                    <input type="text" onChange={saveFaname} class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" onChange={saveLname} class="form-control" id="exampleInputPassword1"></input>
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
                <div class="mb-3">
                    <label class="form-label">ReEnter Password</label>
                    <input type="password" onChange={saveREPassword} class="form-control" id="exampleInputPassword1"></input>
                </div>

                <div class="mb-3 form-group">
                <a onClick={sumbits} class="btn btn-primary btn-block">Submit</a>

                </div>

                <div class="clearfix">
                 
                 <Link to="/">Loging In</Link>
                </div> 

                </form>

            </div>
        </div>
    )
}


export default SignIn
