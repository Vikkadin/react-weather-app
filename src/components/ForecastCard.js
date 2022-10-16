import React from 'react'
import { WiHumidity } from 'react-icons/wi';
import { BsWind } from 'react-icons/bs';
import { RiTempColdFill } from 'react-icons/ri';
import { BsSunrise, BsSunsetFill } from 'react-icons/bs';
import styles from '../css/ForecastCard.module.css'


function Forecast() {
    return (
        <div className={styles.details}>
            <div className={styles.mainforecast}>
                <p className={styles.celsius}>20°</p>
                <div className={styles.mainicon}>
                    <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="weather details" />
                </div>
                <p className={styles.des}>Clear sky</p>
            </div>
            <ul className={styles.moreinfo}>
                <li><RiTempColdFill className={styles.icons} />Min Temp: 17°</li>
                <li><BsWind className={styles.icons} />Wind: 2 km/h</li>
                <li><WiHumidity className={styles.icons} />Humidity: 68 %</li>
                <li><BsSunrise className={styles.icons} />Sunrise: 6:38 AM</li>
                <li><BsSunsetFill className={styles.icons} />Sunset: 7:52 PM</li>
            </ul>
        </div>
    )
}

export default Forecast