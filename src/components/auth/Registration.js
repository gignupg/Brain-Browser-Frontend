import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Registration = ({ setSuccessfulReg }) => {

    let history = useHistory();

    const [error, setError] = useState("");

    const [registrationForm, setRegistrationForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    const changeHandler = e => {
        setRegistrationForm({
            ...registrationForm,
            [e.target.className]: e.target.value
        });
    };

    const registrationHandler = async e => {
        e.preventDefault();
        const { username, email, password, password2 } = registrationForm;

        if (password !== password2) {
            setError("Your passwords don't match!");
        } else if (password.length < 6) {
            setError("Your password needs to be at least 6 characters long!");
        } else if (username && email && password) {
            fetch('http://localhost:8000/registration/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            }).then(res => {
                return res.json();
            })
                .then(data => {
                    console.log(data);
                    setSuccessfulReg(data.email);
                    history.push("/login");
                })
                .catch(error => {
                    console.log(error);
                    setError(error.message);
                });
        } else {
            setError("All fields are required!");
        }
    };



    return (
        <div className="container">
            <h4 className="login-title add-medium-margin">Registration</h4>
            {error && <div className="row"><p className="col s12 m8 l6 offset-m2 offset-l3 center-align deep-orange-text text-lighten-1">{error}</p></div>}
            <div className="row">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card medium z-depth-5">
                        <div className="card-content">
                            <form onSubmit={registrationHandler}>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2 add-tiny-margin">
                                        <input onChange={changeHandler} id="registration-username" type="text" className="username" />
                                        <label htmlFor="registration-username">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2">
                                        <input onChange={changeHandler} id="registration-email" type="email" className="email" />
                                        <label htmlFor="registration-email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2">
                                        <input onChange={changeHandler} id="registration-password" type="password" className="password" />
                                        <label htmlFor="registration-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s10 m8 offset-s1 offset-m2">
                                        <input onChange={changeHandler} id="registration-password2" type="password" className="password2" />
                                        <label htmlFor="registration-password2">Confirm Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn waves-effect waves-light col s10 m8 offset-s1 offset-m2 orange lighten-2 add-tiny-margin" type="submit" name="action">Submit</button>
                                </div>
                            </form>
                            <div className="row">
                                <div className="card-action">
                                    <p>Already registered? Click <Link to="/login" className="link">here</Link> to login.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;