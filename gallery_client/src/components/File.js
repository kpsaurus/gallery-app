import { breakWord } from "../utils/Styles";
function File({ file }) {
    return (
        <div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
            <span uk-icon="image"></span>
            <h5 style={breakWord}>{file.name}</h5>
        </div>
    )
}

export default File;