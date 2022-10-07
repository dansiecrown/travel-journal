import React from 'react'
import data from '../data'


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} />
            <div className="card-body">
                <div>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <span className="country">{props.location}</span>
                    <a className="google">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
