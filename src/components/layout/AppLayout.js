import React from 'react';
import Header from './Header';
import Main from '../main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CreateNewDeck from '../create-new-deck/CreateNewDeck';
import Deck from '../deck/Deck';
import DeckSettings from '../deck/DeckSettings';
import Entry from '../deck/Entry';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path="/entry">
                        <Entry />
                    </Route>                    
                    <Route path="/deck-settings">
                        <DeckSettings />
                    </Route>                    
                    <Route path="/deck">
                        <Deck />
                    </Route>
                    <Route path="/create-new-deck">
                        <CreateNewDeck />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default AppLayout;