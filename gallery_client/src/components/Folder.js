import { breakWordStyle } from "../utils/Styles";
function Folder({ folder }) {
    return (
        <div className="uk-tile uk-padding-small uk-tile-muted uk-border-rounded uk-margin-bottom">
            <span uk-icon="folder"></span>
            <h5 style={breakWordStyle}>{folder.name}</h5>
    </div>)
}

export default Folder;