import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

const Authentication = ({ setUserChanged }) => {

    const [successfulReg, setSuccessfulReg] = useState("");
    const [authSwitch, setAuthSwitch] = useState("login");

    return (
        <>
            {authSwitch === "login" ?
                <Login successfulReg={successfulReg} setSuccessfulReg={setSuccessfulReg} setAuthSwitch={setAuthSwitch} setUserChanged={setUserChanged}/> :
                <Registration setSuccessfulReg={setSuccessfulReg} setAuthSwitch={setAuthSwitch} />}
        </>
    );
};

export default Authentication;