import React, { useEffect, useState } from 'react';
import M from "materialize-css";
import { Auth } from 'aws-amplify';
import Main from '../main/Main';
import CreateNewDeck from '../new-deck/CreateNewDeck';
import Deck from '../deck/Deck';
import DeckSettings from '../deck/DeckSettings';

const Header = ({ setUserChanged, authObj }) => {

    const [page, setPage] = useState("Brain Browser");

    const goBack = () => {
        let goTo = "";
        switch (page) {
            case "Deck Settings":
            case "Entry":
                goTo = "Deck";
                break;
            default:
                goTo = "Brain Browser";
        }
        return goTo;
    };

    useEffect(() => {
        const elems = document.querySelectorAll('.dropdown-trigger');

        const options = {
            coverTrigger: false
        };

        M.Dropdown.init(elems, options);
    });

    const logoutHandler = () => {
        async function signOut() {
            try {
                await Auth.signOut();
                setUserChanged("user logged out");

            } catch (error) {
                console.log('error signing out: ', error);
            }
        }

        signOut();
    };

    return (
        <>
            <div className="row">
                <ul id="dropdown1" className="dropdown-content">
                    <li><a href="#!" className="black-text center-align">Signed in as <b>{authObj.userName}</b></a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><span className="black-text center-align">Settings</span></li>
                    <li><span onClick={logoutHandler} className="black-text center-align">Logout</span></li>
                </ul>
                <nav>
                    <div className="nav-wrapper orange lighten-2">
                        <div className="brand-logo center black-text">{(page === "Deck" || page === "Entry" || page === "Deck Settings") ? "Skam - T2 E1 C1 - El fiestón de Hugo" : page}</div>
                        {
                            page !== "Brain Browser" &&
                            <ul id="nav-mobile" className="left">
                                <li><a onClick={() => setPage(goBack)} href="#!"><i className="material-icons left black-text">arrow_back</i></a></li>
                            </ul>
                        }
                        <ul className="right">
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons black-text">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {page === "Brain Browser" && <Main setPage={setPage} />}
            {page === "Create New Deck" && <CreateNewDeck setPage={setPage} />}
            {page === "Deck Settings" && <DeckSettings setPage={setPage} />}
            {(page === "Deck" || page === "Entry") && <Deck page={page} setPage={setPage} />}
        </>
    );
};

export default Header;