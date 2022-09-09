export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} alt="" />
            <div className="card-data">
                <div className="location-data">
                    <img className="locationMarker" src={require("../../src/assets/images/location-marker.png")} alt="" />
                    <span className="countryName">{props.location}</span>
                    <span className="mapLink"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-journal">{props.description}</p>
            </div>
        </div>
    )
}