import React, { useEffect } from 'react';
import M from "materialize-css";
import { originalTextSample } from './DeckHelper';
import { sampleDeck } from '../Data';

const DeckInfo = () => {

    useEffect(() => {
        const modalElems = document.querySelectorAll('.modal');

        M.Modal.init(modalElems, {});
    }, []);

    return (
        <>
            <div className="row add-small-margin">
                <h6 className="col s2 offset-m1 offset-l2 right-align card-description">Tags:</h6>
                <ul className="card col s9 m6 l4 z-depth-1">
                    <p className="deep-orange-text text-lighten-1">{sampleDeck.tags.map((elem, i) => i > 0 ? ", " + elem : elem)}</p>
                </ul>
            </div>
            <div className="row">
                <h6 className="col s2 offset-m1 offset-l2 right-align card-description">Note:</h6>
                <ul className="card col s9 m6 l4 z-depth-1">
                    <p>
                        Link to the video: <a href="https://www.youtube.com/watch?v=-1SPBHZqf50">https://www.youtube.com/watch?v=-1SPBHZqf50</a>
                    </p>
                </ul>
            </div>
            <div className="row">
                <h6 className="col s2 m3 l2 offset-l2 right-align">Original Text:</h6>

                <a className="col s8 m6 l4 offset-s1 main-submit brown lighten-5 black-text waves-effect waves-light btn modal-trigger" href="#modal-deck">View</a>

                <div id="modal-deck" className="modal">
                    <div className="modal-content">
                        <p>{originalTextSample}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close waves-effect waves-light btn-flat brown lighten-5 black-text">Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeckInfo;