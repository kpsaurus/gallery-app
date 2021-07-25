function File({ file }) {
    const breakWord = {
        wordBreak: 'break-word'
    }
    return (
        <div className="uk-tile uk-tile-muted uk-margin-bottom">
            <span uk-icon="image"></span>
            <h3 style={breakWord}>{file.name}</h3>
        </div>
    )
}

export default File;