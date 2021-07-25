function Folder({ folder }) {
    const breakWord = {
        wordBreak: 'break-word'
    }
    return (
        <div className="uk-tile uk-padding-small uk-tile-muted uk-margin-bottom">
            <span uk-icon="folder"></span>
            <h5 style={breakWord}>{folder.name}</h5>
    </div>)
}

export default Folder;