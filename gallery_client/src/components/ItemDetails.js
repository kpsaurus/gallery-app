import UIkit from "uikit";
import client from "../axios/client";
import { pathContext } from "../context/Context";
import { useContext } from "react";

function ItemDetails({ details }) {
	const { path, setPath } = useContext(pathContext);

	async function deleteItem() {
		await client.delete("object/", { data: { file: path } }).then((res) => {
			if (res) {
				if (res.data.status === "success") {
					UIkit.notification({
						message: "Successfully deleted the file",
						status: "success",
						pos: "bottom-center",
						timeout: 3000,
					});
					setPath("");
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
		});
	}

	const delete_item = (e) => {
		UIkit.modal.confirm("UIkit confirm!").then(
			function () {
				deleteItem();
			},
			function () {}
		);
	};

	return (
		<div>
			<div className="uk-grid uk-child-width-1-2@m">
				<div>
					<img src={details.url} alt="image"></img>
				</div>
				<div>
					<h4>{details.name}</h4>
					<h4>Size: {(details.size / 1024).toFixed(2)} KB</h4>
					<div className="uk-margin-top">
						<button
							className="uk-button uk-button-danger"
							onClick={delete_item}
						>
							<span uk-icon="icon: trash"></span> Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetails;
