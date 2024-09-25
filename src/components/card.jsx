import Details from './details';

function Card(props) {

    return (
        <div className="Card">
            <img src={props.data.condition.icon} />
            <p className="Temp"> {props.data.temp_c}°C </p>
            <Details />
        </div>
    )
}

export default Card;