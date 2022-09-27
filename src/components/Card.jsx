import React from 'react'

export default function Card() {
    return (
        <div className="card">
            <img src='./imgs/mountain-bike.jpg' />
            <div className="card-body">
                <div>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <span className="country">JAPAN</span>
                    <a className="google">View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <p className="date">12, Jan 2021 - 24 Jan, 2021</p>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}
