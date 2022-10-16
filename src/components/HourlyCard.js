import React from 'react'
import styles from '../css/HourlyCard.module.css'


function Hourly() {
    return (
        <div>
            <ul className={styles.hourlyitems}>
                <li className={styles.hourlytemp}> 17°</li>
                <li className={styles.hourlyicon}>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="weather details" />
                </li>
                <li className={styles.hourlytime}>3:00 PM</li>
            </ul>
        </div>
    );
}

export default Hourly