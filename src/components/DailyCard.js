import React from 'react'
import styles from '../css/DailyCard.module.css'


function Daily() {
    return (
        <div>
            <ul className={styles.dailyitems}>
                <li className={styles.dailytemp}>18°</li>
                <li className={styles.dailyicon}>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather details" />
                </li>
                <li className={styles.dailyday}>Sun</li>
            </ul>
        </div>
    );
}

export default Daily