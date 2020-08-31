import React, { useEffect, useState } from 'react';
import M from "materialize-css";
import { vocab } from "../Data";

const DeckTable = () => {
    const originalArr = Object.keys(vocab[0]);
    const [selectedFields, setSelectedFields] = useState(originalArr);

    useEffect(() => {
        const elems = document.querySelectorAll('select');

        M.FormSelect.init(elems, {});
    }, [selectedFields]);

    const selectHandler = (e, index) => {
        const fields = selectedFields.slice(0);
        fields[index] = e.target.value;

        setSelectedFields(fields);
    };

    const numberOfFieldsHandler = (i) => {
        const fields = selectedFields.slice(0);
        let newFields = "";

        if (selectedFields.length > i + 1) {
            newFields = fields.slice(0, i + 1);
        } else {
            const end = originalArr.slice(selectedFields.length, i + 1);
            newFields = selectedFields.concat(end);
        }
        setSelectedFields(newFields);
    };

    return (
        <>
            <div className="row add-small-margin">
                <a className='dropdown-trigger black-text valign-wrapper deck-view right' href='!#' data-target='dropdown2'>View<i className="material-icons black-text small">view_comfy</i></a>

                <ul id='dropdown2' className='dropdown-content'>
                    {originalArr.map((elem, i) => {
                        return (
                            <li onClick={() => numberOfFieldsHandler(i)} key={i}><a href="!#">{i + 1} Field{i ? "s" : ""}</a></li>
                        );
                    })}
                </ul>
            </div>
            <div className="row">
                <ul>
                    <table className="highlight centered">
                        <thead>
                            <tr>
                                {selectedFields.map((columnTitle, index) => {
                                    return (
                                        <th key={index}>
                                            <select defaultValue={columnTitle} onChange={e => selectHandler(e, index)}>
                                                {originalArr.map((columnTitle2, index2) => {
                                                    return <option key={index2} value={columnTitle2}>{columnTitle2}</option>;
                                                })}
                                            </select>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>

                        <tbody>
                            {vocab.map((obj, index) => {
                                return (
                                    <tr key={index}>
                                        {selectedFields.map((objKey, index2) => {
                                            return <td key={index2}>{obj[objKey]}</td>;
                                        })
                                        }
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </ul>
            </div >
        </>
    );
};

export default DeckTable;