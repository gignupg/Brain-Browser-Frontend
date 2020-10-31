import React from 'react';
import DeckInfo from './DeckInfo';
import DeckTable from './DeckTable';
import Entry from './Entry';
import { useHistory } from "react-router-dom";

const Deck = ({ page, setPage }) => {
    const history = useHistory();

    return (
        <>
            {
                page === "Entry" ?
                    <Entry /> :
                    <>
                        <DeckInfo />
                        <div className="row add-small-margin">
                            <button 
                                onClick={() => history.push('/deck-settings')} 
                                className="btn waves-effect waves-light orange lighten-2 black-text col s6 m4 l2 offset-s3 offset-m4 offset-l5"
                            >Settings</button>
                        </div>
                        <div className="row add-tiny-margin">
                            <button onClick={() => history.push('/entry')} 
                                className="btn waves-effect waves-light deep-orange lighten-1 col s6 m4 l2 offset-s3 offset-m4 offset-l5"
                            >New Entry</button>
                        </div>
                        <DeckTable />
                    </>
            }
        </>
    );
};

export default Deck;