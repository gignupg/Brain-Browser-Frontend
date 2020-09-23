import React, { useEffect } from 'react';
import { vocab } from '../../Data';
import M from "materialize-css";

const Entry = () => {

  useEffect(() => {
    const tagElems = document.querySelectorAll('.tag');

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

  M.Chips.init(tagElems, tagOptions);
  }, [])

  return (
    <div className="row">
      <h5 className="card-title add-medium-margin">New Entry</h5>
      <ul className="card col s10 m6 l4 offset-s1 offset-m3 offset-l4 z-depth-1 add-small-margin">
        {
          Object.keys(vocab[0]).map((elem, i) => {
            if (elem === "Tags") {
              return <div className="tag"></div>;
            }
            return (
              <div key={i} className="input-field">
                <input placeholder={elem} type="text" className="validate" />
              </div>
            );
          })
        }
        <button className="main-submit deep-orange lighten-1 col s12 waves-effect waves-light btn add-tiny-margin">Submit</button>
      </ul>
    </div>
  );
};

export default Entry;