function Folder({ folder }) {
    const breakWord = {
        wordBreak: 'break-word'
    }
    return (
        <div className="uk-tile uk-tile-muted uk-margin-bottom">
            <span uk-icon="folder"></span>
            <h3 style={breakWord}>{folder.name}</h3>
    </div>)
}

export default Folder;