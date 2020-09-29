import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import M from 'materialize-css';

const Header = () => {

    const { user, setUser } = useContext(UserContext);

    const { email } = user;

    useEffect(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');

        const options = {
            coverTrigger: false
        };

        M.Dropdown.init(elems, options);
    });

    const logoutHandler = () => {
        const loggedOutUser = {
            auth: false,
            username: "",
            email: ""
        }
        setUser(loggedOutUser);
        localStorage.setItem('user', JSON.stringify(loggedOutUser));
    }

    return (
        <>
            <div className="row">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!" className="black-text center-align">Signed in as <b className="truncate">{email}</b></a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><span className="black-text center-align">Settings</span></li>
                    <li><span 
                            onClick={logoutHandler}
                            className="black-text center-align"
                        >
                            Logout
                        </span>
                    </li>
                </ul>
                <nav>
                    <div className="nav-wrapper orange lighten-2">
                        <div className="brand-logo center black-text">Skam - T2 E1 C1 - El fiestón de Hugo</div>

                        <ul id="nav-mobile" className="left">
                            <li><a href="#!"><i className="material-icons left black-text">arrow_back</i></a></li>
                        </ul>
                        <ul className="right">
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons black-text">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;