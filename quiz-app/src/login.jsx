import { useState } from 'react';
// import './style.css'

import axios from 'axios'



function Login(){
    const[logingValue,setLoginValue]=useState({
        email:"",
        password:"gggg",
    })
    var getLogins;
    const[getLogin,saveLoging]=useState({
        userid: 0,
        email:"",
        password:"",
    })

    

    function saveEmail(event){
        console.log(event.target.value+" email address");
        setLoginValue({
            ...logingValue,
            email:event.target.value
        })
        console.log(logingValue.email+ logingValue.password+"    loging values ");
    }

    function savePassword(event){

        setLoginValue(
            {
                ...logingValue,
                password:event.target.value,
            }
        )
        console.log(logingValue.email + " sssss "+logingValue.password)
    }

    function sumbits(){
        axios.get("http://localhost:8090/login")
            .then(function(Response){ 
                getLogins=Response.data
                console.log("asdjhvja")
                console.log(getLogins[0])
                getLogins.forEach(user => {
                    if((user.email==logingValue.email)&&(user.password==logingValue.password)){
                        console.log("huttoo")
                    }
                    
                });
                console.log("asdjhvja")

            })
            // console.log("yasiru"+ getLogins);
            
    }


    return(

        <div className="loginView">
            <form >
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" onChange={saveEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" onChange={savePassword} class="form-control" id="exampleInputPassword1"></input>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <a onClick={sumbits} class="btn btn-primary">Submit</a>
            </form>
        </div>
    )
}

export default Login