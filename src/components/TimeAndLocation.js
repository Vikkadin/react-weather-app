import React from 'react'
import { formatToLocalTime } from '../ApiService'
import styles from '../css/TimeAndLocation.module.css'

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
    return (
        <div className={styles.localdata}>
            <div className={styles.city}>
                <h4>{`${name}, ${country}`}</h4>
            </div>
            <div className={styles.localtime}>
                <div>{formatToLocalTime(dt, timezone)}</div>
            </div>
        </div>
    )
}

export default TimeAndLocation