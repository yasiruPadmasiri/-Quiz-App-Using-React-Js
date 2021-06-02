
function classCards(classes,index){

    function addmystudent(){
        console.log( classes.email)
    }
    
    return(
        <div key={index} >
            <div  class="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">{classes.classname}</h5>
                                <h6 class="card-subtitle mb-2 text-muted"> Grade  {classes.grade}  {classes.subject} </h6>
                                <p class="card-text">teacher,s Email is  {classes.email}</p>
                                <button  onClick={addmystudent}  id={index} class="card-link">Add Students</button>
                            </div>
                            </div>
                   
        </div>
    )

}

export default classCards