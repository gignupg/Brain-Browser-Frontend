import React, { useState } from 'react';
import userContext from './UserContext';

const UserState = props => {

    const initialUser = () => {
        const savedSession = JSON.parse(localStorage.getItem('user'));

        if (savedSession.auth) {
            return savedSession;
        } else {
            return {
                auth: false,
                username: "",
                email: ""
            }
        }
    }

const [user, setUser] = useState(initialUser());

return (
    <userContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {props.children}
    </userContext.Provider>
);
};

export default UserState;