import React from 'react';
import ReactDOM from 'react-dom';
import axios from'axios'
import './style.css'
import LoadQuiz from './component/Quiz'
import Loging from './login'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Teach from './component/Teacher/teacherIndex';
import SignIn from './signin'
import CreateClass from '../src/component/Teacher/components/createClass'
import AddStudents from './component/Teacher/components/addStudents'


function App(){
    return(
        <BrowserRouter>

            <Route>
                <div>
                    <Switch>
                        <Route path="/" exact component={Loging} />
                        <Route path="/Quiz" component={LoadQuiz} />
                        
                        <Route path="/teacher/CreateClass"   component={CreateClass} />
                        <Route path="/teacher/AddStudents"   component={AddStudents} />
                        <Route path="/teacher" exact component={Teach} />
                        <Route path="/signIn" component={SignIn} />
                        
                    </Switch>
                </div>
            </Route>
        
        </BrowserRouter>
    )

}

export default App