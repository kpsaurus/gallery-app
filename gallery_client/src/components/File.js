import { breakWordStyle, selectItemStyle,hoverInStyle,hoverOutStyle } from "../utils/Styles";
import { useState } from 'react';
function File({ file }) {
    const [itemStyle, setItemStyle] = useState({})
    const select = (e) => {
        setItemStyle(selectItemStyle)
    }
    const mouseHover = (e) => {
        setItemStyle(hoverInStyle)
    }

    const mouseLeave = (e) => {
        setItemStyle(hoverOutStyle)
    }

    return (
        <div onMouseEnter={mouseHover} onMouseLeave={mouseLeave} onClick={select} style={itemStyle} className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
            <span uk-icon="image"></span>
            <h5 style={breakWordStyle}>{file.name}</h5>
        </div>
    )
}

export default File;