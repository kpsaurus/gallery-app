import { breakWordStyle, selectItemStyle } from "../utils/Styles";
import { useState, useContext } from "react";
import { pathContext } from "../context/Context";

function File({ file }) {
	const [itemStyle, setItemStyle] = useState({});
	const { setPath } = useContext(pathContext);
	const select = (e) => {
		setItemStyle(selectItemStyle);
		setPath(file.path);
	};

	return (
		<div
			onClick={select}
			style={itemStyle}
			className="uk-tile pointer uk-padding-small uk-tile-muted uk-border-rounded uk-margin-bottom"
		>
			<span uk-icon="image"></span>
			<h5 style={breakWordStyle}>{file.name}</h5>
		</div>
	);
}

export default File;
