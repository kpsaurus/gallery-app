import { breakWordStyle, selectItemStyle,hoverInStyle,hoverOutStyle } from "../utils/Styles";
import { useState } from 'react';
function File({ file, setPath }) {
    const [itemStyle, setItemStyle] = useState({})

    const select = (e) => {
        setItemStyle(selectItemStyle)
        setPath(file.name)

    }
    const mouseHover = (e) => {
        setItemStyle(hoverInStyle)
    }

    const mouseLeave = (e) => {
        setItemStyle(hoverOutStyle)
    }

    return (
        <div onMouseEnter={mouseHover} onMouseLeave={mouseLeave} onClick={select} style={itemStyle} className="uk-tile uk-padding-small uk-tile-muted uk-border-rounded uk-margin-bottom">
            <span uk-icon="image"></span>
            <h5 style={breakWordStyle}>{file.name}</h5>
        </div>
    )
}

export default File;