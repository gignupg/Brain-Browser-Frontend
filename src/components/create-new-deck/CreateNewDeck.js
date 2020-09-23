import React, { useEffect } from 'react';
import { defaultLayout } from '../../Data';
import M from "materialize-css";

const CreateNewDeck = ({ setPage }) => {

    useEffect(() => {
        const tagElems = document.querySelectorAll('.tag');
        const elems = document.querySelectorAll('.collapsible');
        const selectElems = document.querySelectorAll('select');
        const modalElems = document.querySelectorAll('.modal');

        const tagOptions = {
            autocompleteOptions: {
                data: {
                    'english': null,
                    'pronunciation': null,
                    'français': null,
                    'español': null
                }
            },
            placeholder: 'Add some Tags',
            secondaryPlaceholder: 'Add more Tags',
        };

        M.Chips.init(tagElems, tagOptions);
        M.Collapsible.init(elems, {});
        M.FormSelect.init(selectElems, {});
        M.Modal.init(modalElems, {});
    }, []);

    return (
        <>
            <h5 className="card-title add-medium-margin">Setup</h5>
            <div className="row add-small-margin">
                <ul className="collapsible col s10 m6 l4 offset-s1 offset-m3 offset-l4">
                    <li>
                        <div className="collapsible-header">Deck Name (required)</div>
                        <div className="collapsible-body"><input placeholder="Choose a name for this deck." /></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Tags (recommended)</div>
                        <div className="collapsible-body"><div className="tag">
                            <input />
                        </div></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Note</div>
                        <div className="collapsible-body"><textarea placeholder="Write down any information you want. This would be a good place to include
                        links or other data related to this deck." className="materialize-textarea newDeckNote"></textarea></div>
                    </li>
                    <li>
                        <div className="collapsible-header">Original Text</div>
                        <div className="collapsible-body"><a className="col s12 main-submit brown lighten-5 black-text waves-effect waves-light btn modal-trigger" href="#new-deck-text">Edit</a>

                            <div id="new-deck-text" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <textarea className="original-input" placeholder="Paste the full original text in here. This will allow you to find 
                                    passages and expressions in the original text. You can include the original text in you search by either 
                                    including the tag: 'original-text' or by narrowing your search 
                                    down to one single deck which will automatically include the orinal 
                                    text."></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-close waves-effect waves-light btn-flat orange lighten-2 black-text">Save & close</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header">Card Layout</div>
                        <div className="collapsible-body"><a className="col s12 main-submit brown lighten-5 black-text waves-effect waves-light btn modal-trigger" href="#new-deck-layout">Edit</a>

                            <div id="new-deck-layout" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <button className="btn deep-orange lighten-3 right button-spacer">load preset</button>
                                    <button className="btn brown lighten-4 right black-text button-spacer">save preset</button>
                                    <div className="row add-medium-margin">
                                        {defaultLayout.map((elem, i) => {
                                            if (elem === "Tags") {
                                                return (
                                                    <div className="col s12 add-tiny-margin" key={i}>
                                                        <h6 className="col s12 m2 offset-m1 offset-l2">Field {i + 1}:</h6>
                                                        <input id="new-layout-field1" className="col s10 m6 l4" value="Tags" />
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div className="col s12 add-tiny-margin" key={i}>
                                                        <h6 className="col s12 m2 offset-m1 offset-l2">Field {i + 1}:</h6>
                                                        <input id="new-layout-field1" className="col s10 m6 l4" />
                                                        <a href="!#" className="col s2 l1"><i className="material-icons prefix black-text">delete</i></a>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                    <button className="btn col l4 offset-l4 add-tiny-margin">Add Field</button>
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-close waves-effect waves-light btn-flat orange lighten-2 black-text">Save & close</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <button onClick={() => setPage("Deck")} className="btn waves-effect waves-light deep-orange lighten-1 col s10 m6 l4 offset-s1 offset-m3 offset-l4 add-tiny-margin">Create</button>
            </div>
            <div className="add-small-margin"></div>
        </>
    );
};

export default CreateNewDeck;