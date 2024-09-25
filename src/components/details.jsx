function Details(props) {
    return (
        <div className="deet">
            {props.data}
            <br />
            {props.info}{props.sign}
        </div>
    )
}

export default Details;