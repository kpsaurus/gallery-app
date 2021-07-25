import React, { useState,useRef, useEffect } from 'react';

function NewFolder({ folder }) {

    const [newFolderName, setNewFolderName] = useState(folder);
    const [inputStyle, setInputStyle] = useState({
        'outline': '1px dashed blue',
        'lineHeight': 3
    })


    const renameFolder = (e) => {
        const newName = e.target.textContent

        setInputStyle(
            {
                'outline': '1px dashed blue',
                'lineHeight':3
            }
        )
    }

    const focusOut = (e) => {
        setInputStyle(
            {
                'outline': '1px dashed black',
                'lineHeight':3
            }
        )
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