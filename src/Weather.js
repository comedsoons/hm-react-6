import React from 'react';

export default function Weather({imgLink, cityName, degrees}) {
    return (
        <div>
            <img src={imgLink} width="150"/>
            <h2>{cityName}</h2>
            <h3>{degrees}°C</h3>
        </div>
    )
}
