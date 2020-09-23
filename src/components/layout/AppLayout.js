import React from 'react';
import Header from './Header';
import Main from '../main/Main';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import CreateNewDeck from '../create-new-deck/CreateNewDeck';
import Deck from '../deck/Deck';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/deck">
                        <Deck />
                    </Route>
                    <Route path="/create-new-deck">
                        <CreateNewDeck />
                    </Route>
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default AppLayout;