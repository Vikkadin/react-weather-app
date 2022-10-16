import React from 'react'
import { WiHumidity } from 'react-icons/wi';
import { BsWind } from 'react-icons/bs';
import { RiTempColdFill } from 'react-icons/ri';
import { BsSunrise, BsSunsetFill } from 'react-icons/bs';
import { formatToLocalTime, iconUrlFromCode } from '../ApiService'
import styles from '../css/ForecastCard.module.css'


function Forecast({
    weather: {
        details,
        icon,
        temp,
        temp_min,
        sunrise,
        sunset,
        speed,
        humidity,
        timezone,
    },
}) {
    return (
        <div className={styles.details}>
            <div className={styles.mainforecast}>
                <p className={styles.celsius}>{`${temp.toFixed()}°`}</p>
                <div className={styles.mainicon}>
                    <img src={iconUrlFromCode(icon)} alt="weather details" />
                </div>
                <p className={styles.des}>{details}</p>
            </div>
            <ul className={styles.moreinfo}>
                <li><RiTempColdFill className={styles.icons} />Min Temp: {`${temp_min.toFixed()}°`}</li>
                <li><BsWind className={styles.icons} />Wind: {`${speed.toFixed()} km/h`}</li>
                <li><WiHumidity className={styles.icons} />Humidity: {`${humidity.toFixed()}%`}</li>
                <li><BsSunrise className={styles.icons} />Sunrise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}</li>
                <li><BsSunsetFill className={styles.icons} />Sunset: {formatToLocalTime(sunset, timezone, "hh:mm a")}</li>
            </ul>
        </div>
    )
}

export default Forecast