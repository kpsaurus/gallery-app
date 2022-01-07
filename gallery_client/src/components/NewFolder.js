import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { pathContext } from "../context/Context";
import UIkit from "uikit";
import client from "../axios/client";

function NewFolder({ setNewFolder, fetchData }) {
	const { path } = useContext(pathContext);

	const createFolder = async (folder, path) => {
		await client
			.post("folder/", { folder: folder, path: path })
			.then((res) => {
				if (res) {
					if (res.data.status === "success") {
						UIkit.notification({
							message: "Successfully created the folder",
							status: "success",
							pos: "bottom-center",
							timeout: 3000,
						});
						fetchData();
						setNewFolder("");
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
	};

	return (
		<div>
			<div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
				<Formik
					initialValues={{ new_folder: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.new_folder) {
							errors.new_folder = "Required";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						//console.log(JSON.stringify(values, null, 2));
						createFolder(values["new_folder"], path);
						setSubmitting(true);
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Field type="new_folder" className="uk-input" name="new_folder" />
							<ErrorMessage name="new_folder" component="div" />
							<div className="uk-margin">
								<button
									className="uk-button uk-button-primary uk-width-expand"
									type="submit"
									disabled={isSubmitting}
								>
									Create
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default NewFolder;
