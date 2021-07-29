function ItemDetails({details}) {
    return (<div>
        <div className="uk-grid uk-child-width-1-2@m">
            <div>
                <img src={details.url}></img>
            </div>
            <div>
                <h4>{details.name}</h4>
                <h4>Size: {(details.size / 1024).toFixed(2)} KB</h4>
            </div>
        </div>
    </div>
    )
}

export default ItemDetails;