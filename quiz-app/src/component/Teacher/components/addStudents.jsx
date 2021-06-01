import axios from "axios"
import React, { useState } from 'react';

function AddStudents(){
    var takingClasses=[];
    // const [clzGrade,setclsGrade]=useState("")




    var temail=sessionStorage.getItem("email");
    
    axios.get("http://localhost:8090/getClases", {
        params: {
          email: temail
        }
        })
        
    .then(function(Response){
        console.log(Response.data);
        takingClasses=Response.data;
        console.log(takingClasses);
        
        
    })



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


   

  
    

    return(
        
        <div>
         

         <div>
             {setTimeout(function() {

                console.log("sadada")
                console.log(takingClasses)
                takingClasses.map(Cards)
                
                }, 5000)}
          
            
            </div>

        </div>





    )
}
export default AddStudents