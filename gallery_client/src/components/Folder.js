import { breakWordStyle} from "../utils/Styles";
import { useState } from 'react';
function Folder({ folder, setPath }) {

    const select = (e) => {
        setPath(folder.name)
    }

    return (
        <div className="uk-tile pointer uk-padding-small uk-tile-muted uk-border-rounded uk-margin-bottom" onClick={select}>
            <span uk-icon="folder"></span>
            <h5 style={breakWordStyle}>{folder.name}</h5>
    </div>)
}

export default Folder;