import React, { useState, useContext } from "react";
import client from "../axios/client";
import UIkit from "uikit";
import { pathContext } from "../context/Context";

function Upload({ fetchData }) {
	console.log("Folder component");
	const [setFile] = useState(null);
	const { path } = useContext(pathContext);

	const fileUpload = {
		cursor: "pointer",
	};

	async function uploadFile(formData) {
		await client
			.put("object/", formData)
			.then((res) => {
				if (res) {
					if (res.data.status == "success") {
						UIkit.notification({
							message: "Successfully uploaded the file",
							status: "success",
							pos: "bottom-center",
							timeout: 3000,
						});
						fetchData();
					} else {
						const errors = res.data.errors;
						for (let i = 0; i < errors.length; i++) {
							for (let j = 0; j < errors[i]["errors"].length; j++) {
								UIkit.notification({
									message: errors[i].field + ": " + errors[i]["errors"][j],
									status: "danger",
									pos: "bottom-center",
									timeout: 3000,
								});
							}
						}
					}
				}
			})
			.catch((err) => {
				UIkit.notification({
					message: "Failed to upload the file",
					status: "danger",
					pos: "bottom-center",
					timeout: 3000,
				});
			});
	}

	const fileChange = (e) => {
		setFile(e.target.files[0]);
		const formData = new FormData();

		formData.append("path", path);
		formData.append("file", e.target.files[0]);

		uploadFile(formData);
	};

	return (
		<div className="uk-button uk-button-primary uk-width-1-1 uk-width-auto@s">
			<label style={fileUpload}>
				<input
					className="uk-hidden"
					type="file"
					name="file"
					onChange={fileChange}
				/>
				<span uk-icon="icon: upload"></span> Upload File
			</label>
		</div>
	);
}

export default Upload;
