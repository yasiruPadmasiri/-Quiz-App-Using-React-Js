import React from 'react';
import ReactDOM from 'react-dom';
import axios from'axios'

import './style.css'
import LoadQuiz from './component/Quiz'
import Loging from './login'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


function App(){
    return(
        <BrowserRouter>

            <Route>
                <div>
                    <Switch>
                        <Route path="/" exact component={Loging} />
                        <Route path="/Quiz" component={LoadQuiz} />
                    </Switch>
                </div>
            </Route>
        
        </BrowserRouter>
    )

}

export default App