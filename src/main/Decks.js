import React from 'react';
import { deckArr } from '../Data';

const Decks = () => {

    return (
        <div className="row">
            <h5 className="card-title add-small-margin">Decks ({deckArr.length})</h5>
            <ul id="main-decks" className="collection col s10 m6 l4 offset-s1 offset-m3 offset-l4 z-depth-3 add-tiny-margin">
                {deckArr.map(deckName => {
                    return (
                        <li key={deckName} className="collection-item valign-wrapper">
                            <div className="deck-name">{deckName}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Decks;