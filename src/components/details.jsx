function Details(props) {
    return (
        <div className="deet">
            {props.data}
            <br />
            {Math.trunc(props.info)}{props.sign}
        </div>
    )
}

export default Details;