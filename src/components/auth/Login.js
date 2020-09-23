import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const Login = ({ setSuccessfulReg, successfulReg }) => {

    const { user, setUser } = useContext(UserContext);

    const [loginForm, setLoginForm] = useState({
        input: "",
        password: ""
    });

    const [error, setError] = useState("");

    const changeHandler = e => {
        setLoginForm({
            ...loginForm,
            [e.target.className]: e.target.value
        });
    };

    const loginHandler = e => {
        e.preventDefault();
        const { input, password } = loginForm;

        if (!password) {
            setError("Fields can't be left empty!");
            setSuccessfulReg("");
        } else {
            fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    input: input,
                    password: password
                })
            }).then(res => {
                return res.json();
            }).then(data => {
                if (!data.auth) {
                    setError("Something went wrong. Password and username/email didn't match!");
                    setSuccessfulReg("");
                } else {
                    setUser({
                        ...user,
                        auth: data.auth,
                        username: data.username,
                        email: data.email
                    });
                    setSuccessfulReg("");
                }
            }).catch(error => {
                setError(error.message);
                setSuccessfulReg("");
            });
        }
    };

    return (
        <div className="container">
            <h4 className="login-title add-medium-margin">Login</h4>
            {successfulReg &&
                <div className="row">
                    <p className="col s12 m8 l6 offset-m2 offset-l3 center-align deep-orange-text text-lighten-1">
                        Registration successful! A confirmation email has been sent to {successfulReg}. Please confirm your email, before logging in!
                    </p>
                </div>}
            {error &&
                <div className="row">
                    <p className="col s12 m8 l6 offset-m2 offset-l3 center-align deep-orange-text text-lighten-1">
                        {error}
                    </p>
                </div>}
            <div className="row">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card small z-depth-5">
                        <div className="card-content">
                            <form onSubmit={loginHandler}>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2 add-tiny-margin">
                                        <input onChange={changeHandler} id="login-input" type="text" className="input" />
                                        <label htmlFor="login-input">Username or email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2">
                                        <input onChange={changeHandler} id="login-password" type="password" className="password" />
                                        <label htmlFor="login-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn waves-effect waves-light col s10 m8 offset-s1 offset-m2 orange lighten-2 add-tiny-margin" type="submit" name="action">Submit
                                </button>
                                </div>
                            </form>
                            <div className="row">
                                <div className="card-action">
                                    <p>Not registered yet? Click <Link to="/registration" className="link">
                                        here
                                        </Link> to register.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;