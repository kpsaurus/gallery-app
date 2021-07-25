function File({file}) {
    return (
        <div className="uk-tile uk-tile-muted uk-margin-bottom">
            <span uk-icon="image"></span>
            <h3>{file.name}</h3>
        </div>
    )
}

export default File;