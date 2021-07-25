import React, { useState,useRef, useEffect } from 'react';
import { newFolderBlurOutline, newFolderFocusOutline } from '../utils/Styles';
function NewFolder({ folder }) {

    const [newFolderName, setNewFolderName] = useState(folder);
    const [inputStyle, setInputStyle] = useState(newFolderFocusOutline)


    const renameFolder = (e) => {
        const newName = e.target.textContent

        setInputStyle(newFolderFocusOutline)
    }

    const focusOut = (e) => {
        setInputStyle(newFolderBlurOutline)
    }

    const inputFolderName = useRef(null);

    useEffect(() => {
        inputFolderName.current.focus();
    }, [inputFolderName]);


    return (
        <div>
            <div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
                <h5 style={inputStyle} autoFocus ref={inputFolderName} contentEditable="true" onInput={renameFolder} onBlur={focusOut}  suppressContentEditableWarning={true}>{newFolderName.name}</h5>
                <button className="uk-button uk-button-default">Save</button>
            </div>
        </div>)
}

export default NewFolder;