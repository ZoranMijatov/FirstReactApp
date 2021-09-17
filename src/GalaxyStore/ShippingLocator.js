import React, { useState } from 'react'

const GeoLocator = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus(`Your browser sucks and doesn't show location`);
        } else {
            setStatus('Loading...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLng(position.coords.longitude);
                setLat(position.coords.latitude);
            }, () => {
                setStatus(`Couldn't find you`);
            })
        }
    }

    return ( 
        <div>
            <button onClick={getLocation}>Get Location</button>
            <p>{status}</p>
            {lat && <p>Latitute: {lat}</p>}
            {lng && <p>Latitute: {lng}</p>}
        </div>
    )
}

export default GeoLocator
