
function Headers(){

    var Role=sessionStorage.getItem("role");
    var showHeader=sessionStorage.getItem("Inlogin");


    return(
        
        <div>
            {/* {showHeader==false?<div><h1>zdada</h1>adhagjhgjas</div> :null
            } */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Hela Quizz {Role} </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    {Role=="teacher"?<a class="nav-link active" aria-current="page" href="#">TClasses</a>:
                    <a class="nav-link active" aria-current="page" href="#">SClasses</a>
                    }
                    
                    </li>
                    <li class="nav-item">
                    {Role=="teacher"? <a class="nav-link" href="#">Post Quiz</a>:null
                    }
                   
                    </li>
                    <li class="nav-item">
                    {Role=="teacher"?<a class="nav-link" href="#">Edit Profile</a>:
                    <a class="nav-link" href="#">Edit Pro</a>}
                    
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>


                </div>
                <ul class="nav justify-content-end">
                
                <li class="nav-item">
                {Role=="teacher"?<a class="nav-link" href="#">Logout</a>:
                <a class="nav-link" href="#">Logout</a>}
                
                </li>
            </ul>
            </div>
            </nav>

        </div>

    )

}

export default Headers