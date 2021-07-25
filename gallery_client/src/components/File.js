function File({ file }) {
    const breakWord = {
        wordBreak: 'break-word'
    }
    return (
        <div className="uk-tile uk-tile-muted uk-margin-bottom">
            <span uk-icon="image"></span>
            <h5 style={breakWord}>{file.name}</h5>
        </div>
    )
}

export default File;