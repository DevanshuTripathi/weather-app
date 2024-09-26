import Details from './details';

function Card(props) {

    return (
        <div className="Card">
            <p className="Temp"> {Math.trunc(props.data.temp_c)}°C</p>
            <div className="details">
                <ul>
                    <li><Details info={props.data.humidity} data="humidity" sign="%" /></li>
                    <li><Details info={props.data.feelslike_c} data="feels like" sign="°C" /></li>
                    <li><Details info={props.data.pressure_mb} data="pressure" sign="hPa" /></li>
                </ul>
                <ul>
                    <li><Details info={props.data.uv} data="uv" sign="" /></li>
                    <li><Details info={props.data.wind_kph} data="wind" sign="kph" /></li>
                    <li><Details info={props.data.vis_km} data="visibility" sign="km" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Card;