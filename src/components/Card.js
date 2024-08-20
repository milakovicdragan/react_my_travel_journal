import React from "react"
import Fuji from "../images/mount_fuji.png"
import Pin from "../images/google_pin.png"

export default function Card(props) {
    return (
        <div className="card">
            <div>
                <img className="card-img" src={props.item.imageUrl} alt="Mount" />
            </div>
            <div className="card-desc">
                <div className="card-map">
                    <img className="card-google_pin" src={Pin} alt="Google" />
                    <h1 className="card-contry">{props.item.location}</h1>
                    <a className="card-ancher" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <h2 className="card-date">{props.item.startDate}<> - </>{props.item.endDate}</h2>
                <p className="card-paragraf">{props.item.description}</p>

            </div>
        </div>
    )
}