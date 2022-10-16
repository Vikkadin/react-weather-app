import React from 'react'
import styles from '../css/TimeAndLocation.module.css'

function TimeAndLocation() {
    return (
        <div className={styles.localdata}>
            <div className={styles.city}>
                <h4>Kyiv, UA</h4>
            </div>
            <div className={styles.localtime}>
                <div>16 Oct 2022 | 1:00 PM</div>
            </div>
        </div>
    )
}

export default TimeAndLocation