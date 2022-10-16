import React, { useState } from 'react'
import { BiSearchAlt, BiCurrentLocation } from 'react-icons/bi'
import styles from '../css/Form.module.css'

function Form({ setQuery }) {
    const [city, setCity] = useState("");

    const handleSearchClick = (event) => {
        if (city !== "") setQuery({ q: city });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    return (
        <form type="submitForm" className={styles.searchbar} onSubmit={handleSubmit} >
            <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text"
                name="city"
                placeholder='Type city...'
                autoComplete='off'
                autoFocus
                required />
            <button type="submit" className={styles.sicon}>
                <BiSearchAlt
                    onClick={handleSearchClick}
                />
            </button>
            <button type="button" className={styles.licon}>
                <BiCurrentLocation
                    onClick={handleLocationClick}
                />
            </button>
        </form >
    )
}

export default Form