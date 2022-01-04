import React, { useState, useRef, useEffect } from "react";
import {
	newFolderBlurOutlineStyle,
	newFolderFocusOutlineStyle,
} from "../utils/Styles";
function NewFolder({ folder }) {
	const [newFolderName, setNewFolderName] = useState(folder);
	const [inputStyle, setInputStyle] = useState(newFolderFocusOutlineStyle);

	const renameFolder = (e) => {
		const newName = e.target.textContent;

		setInputStyle(newFolderFocusOutlineStyle);
	};

	const focusOut = (e) => {
		setInputStyle(newFolderBlurOutlineStyle);
	};

	const inputFolderName = useRef(null);

	const createFolder = () => {
		setNewFolderName(inputFolderName.current.textContent);
	};

	useEffect(() => {
		inputFolderName.current.focus();
	}, [inputFolderName]);

	return (
		<div>
			<div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
				<h5
					style={inputStyle}
					autoFocus
					ref={inputFolderName}
					contentEditable="true"
					onInput={renameFolder}
					onBlur={focusOut}
					suppressContentEditableWarning={true}
				>
					{newFolderName.name}
				</h5>
				<button className="uk-button uk-button-default" onClick={createFolder}>
					Save
				</button>
			</div>
		</div>
	);
}

export default NewFolder;
