function Folder({ folder }) {
    return (
        <div className="uk-tile uk-tile-muted uk-margin-bottom">
            <span uk-icon="folder"></span>
            <h3>{folder.name}</h3>
    </div>)
}

export default Folder;