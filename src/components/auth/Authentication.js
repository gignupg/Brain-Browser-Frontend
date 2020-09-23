import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Authentication = () => {

    const [successfulReg, setSuccessfulReg] = useState("")

    return (
        <Router>
            <Switch>
                <Route path="/registration">
                    <Registration setSuccessfulReg={setSuccessfulReg}/>
                </Route>
                <Route path="/login">
                    <Login setSuccessfulReg={setSuccessfulReg} successfulReg={successfulReg}/>
                </Route>
                <Route path="/">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </Router>
    );
};

export default Authentication;