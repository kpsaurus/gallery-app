import { breakWordStyle, selectItemStyle } from "../utils/Styles";
import { useState, useContext } from "react";
import { pathContext } from "../context/Context";
function Folder({ folder }) {
	const [itemStyle, setItemStyle] = useState({});
	const { setPath } = useContext(pathContext);
	const select = (e) => {
		setPath(folder.name);
		setItemStyle(selectItemStyle);
	};

	return (
		<div
			className="uk-tile pointer uk-padding-small uk-tile-muted uk-border-rounded uk-margin-bottom"
			style={itemStyle}
			onClick={select}
		>
			<span uk-icon="folder"></span>
			<h5 style={breakWordStyle}>{folder.name}</h5>
		</div>
	);
}

export default Folder;
