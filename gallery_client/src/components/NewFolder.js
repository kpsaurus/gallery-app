import React, { useEffect } from "react";

function NewFolder({ folder }) {
	console.log("New Folder component");

	const createFolder = () => {
		// save
	};

	useEffect(() => {
		//
	}, []);

	return (
		<div>
			<div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
				<input
					type="text"
					className="uk-input uk-border-rounded"
					placeholder="New folder name"
				></input>
				<button className="uk-button uk-button-default" onClick={createFolder}>
					Save
				</button>
			</div>
		</div>
	);
}

export default NewFolder;
