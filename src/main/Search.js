import React, { useEffect } from 'react';
import M from "materialize-css";

const Search = () => {

    useEffect(() => {
        const deckElems = document.querySelectorAll('.deck');
        const tagElems = document.querySelectorAll('.tag');
        const modalElems = document.querySelectorAll('.modal');

        const deckOptions = {
            autocompleteOptions: {
                data: {
                    'VGHS - S1 E5': null,
                    'Skam - T2 E1 C2 - Yo no noto nada': null,
                    'Errores': null
                }
            },
            placeholder: 'Deck',
            secondaryPlaceholder: 'Add a Deck',
        };
        const tagOptions = {
            autocompleteOptions: {
                data: {
                    'english': null,
                    'pronunciation': null,
                    'français': null,
                    'español': null
                }
            },
            placeholder: 'Tags',
            secondaryPlaceholder: 'Add more Tags',
        };

        M.Chips.init(deckElems, deckOptions);
        M.Chips.init(tagElems, tagOptions);
        M.Modal.init(modalElems, {});
    }, []);

    return (
        <div className="row">
            <h5 className="card-title add-small-margin">Search</h5>
            <ul className="card col s10 m6 l4 offset-s1 offset-m3 offset-l4 z-depth-1 add-tiny-margin">
                <div className="deck"></div>
                <div className="tag"></div>
                <div className="input-field">
                    <input placeholder="Search" id="mainSearch" type="text" className="validate" />
                </div>
                <a className="main-submit deep-orange lighten-1 col s12 waves-effect waves-light btn modal-trigger" href="#modal-main">Submit</a>

                <div id="modal-main" className="modal">
                  <div className="modal-content">
                    <h4>Results (7)</h4>
                    <p>
                    <br/><br/>
                    <strong>Score: 4/4 </strong><br/>
                    crawdad	|| Hot crawdads, that kid can play.	|| Flusskrebs
                    <br/><br/>
                    <strong>Score: 2/4 </strong><br/>
                    gumption || I gotta admire your gumption, kid. || the strong will and determination to do something, Entschlossenheit
                    <br/><br/>
                    <strong>Score: 1.8/4 </strong><br/>
                    careen, chequered || The thrum of a rumble chair as you careen past the chequered flag. || schlittern, rasen, kariert
                    <br/><br/>
                    <strong>Score: 1/4 </strong><br/>
                    to draw first blood	Boolean! || Underclassmen draw first blood. || den ersten Treffer landen
                    <br/><br/>
                    <strong>Score: 1/4 </strong><br/>
                    to bust one's chops || The reason I bust your chops is cause I know you got what it takes || sich den Arsch aufreißen, jemandem die Hölle heiß machen, I've been busting my chops to get this out by end of day.
                    <br/><br/>
                    <strong>Score: 0.9/4 </strong><br/>
                    pinned down || We're pinned down on the left. || feststecken, festgenagelt
                    <br/><br/>
                    <strong>Score: 0.7/4 </strong><br/>
                    to gab || Now we've seen some great action today, but this final match is the one that everyone's gabbing about. || quatschen, plappern, tratschen, quasseln
                    <br/><br/>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <a href="/main" className="modal-close waves-effect waves-green btn-flat">Close</a>
                  </div>
                </div>
            </ul>

        </div >
    );
};

export default Search;