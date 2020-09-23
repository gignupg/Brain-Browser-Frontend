import React, { useState } from 'react';
import userContext from './UserContext';

const UserState = props => {

    const initialUser = {
        auth: true,
        username: "",
        email: ""
    }

    const [user, setUser] = useState(initialUser);

    
    return (
        <userContext.Provider
            value={{
                user,
                setUser
            }}
        > 
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;