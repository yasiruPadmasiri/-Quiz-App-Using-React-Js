import axios from "axios"

function AddStudents(){



    function Cards(){
        return(
            <div className="col-md-5">
                <h1>asdasdadadasdadad</h1>
                <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Class name</h5>
    <h6 class="card-subtitle mb-2 text-muted">Grade</h6>
    <p class="card-text">subjectName</p>
    <a href="#" class="card-link">Add Student</a>
   
  </div>
</div>
            </div>
        )
    }

    var temail=sessionStorage.getItem("email");
    axios.get("http://localhost:8090/getClases", {
        params: {
          email: temail
        }
        })
        
    .then(function(Response){
        console.log(Response.data);
    })

    return(
        <div>
            <h1>
                this is Add Students
            </h1>

<Cards></Cards>





        </div>
    )
}
export default AddStudents