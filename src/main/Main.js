import React, { useEffect } from 'react';
import M from "materialize-css";
import Search from './Search';
import Decks from './Decks';

const Main = ({ setPage }) => {

    useEffect(() => {
        var tooltippedElems = document.querySelectorAll('.tooltipped');

        const options = {
            html: "Create a New Deck",
            position: "top"
        };

        M.Tooltip.init(tooltippedElems, options);

    }, []);


    return (
        <div className="main-body">
            <Search />
            <Decks />
            <div className="fixed-action-btn">
                <button 
                    onClick={() => setPage("Create New Deck")}
                    className="btn-floating waves-effect waves-light btn-large deep-orange lighten-1 tooltipped"
                >
                    <i className="large material-icons">add</i>
                </button>
            </div>
        </div>
    );
};

export default Main;