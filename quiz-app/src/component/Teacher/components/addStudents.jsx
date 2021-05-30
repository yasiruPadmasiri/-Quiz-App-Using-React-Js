import axios from "axios"

function AddStudents(){
    var temail=sessionStorage.getItem("email");
    axios.get("http://localhost:8090/getClases?email=temail",{

    })

    return(
        <div>
            <h1>
                this is Add Students
            </h1>







        </div>
    )
}
export default AddStudents