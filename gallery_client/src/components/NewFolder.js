import React, { useState,useRef, useEffect } from 'react';

function NewFolder({ folder }) {

    const [newFolderName, setNewFolderName] = useState(folder);
    
    const renameFolder = (e) => {
        const newName = e.target.textContent
    }

    const inputFolderName = useRef(null);

    useEffect(() => {
        inputFolderName.current.focus();
    }, [inputFolderName]);


    return (<div className="uk-tile uk-tile-muted uk-margin-bottom">
        <h3 autoFocus ref={inputFolderName} contentEditable="true" onInput={renameFolder} onBlur={renameFolder} suppressContentEditableWarning={true}>{newFolderName.name}</h3>
        <button className="uk-button uk-button-default">Save</button>
    </div>)
}

export default NewFolder;