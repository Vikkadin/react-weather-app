import React from 'react'
import { iconUrlFromCode } from '../ApiService'
import styles from '../css/DailyCard.module.css'


function Daily({ items }) {
    return (
        <div className={styles.dailycard}>
            <div className={styles.dailytitle}>
                <h2>Daily Forecast</h2>
            </div>
            {items.map((item, index) => (
                <ul key={index} className={styles.dailyitems}>
                    <li className={styles.dailytemp}>{`${item.temp.toFixed()}°`}</li>
                    <li className={styles.dailyicon}>
                        <img src={iconUrlFromCode(item.icon)} alt="wether ditails" />
                    </li>
                    <li className={styles.dailyday}>{item.title}</li>
                </ul>
            ))
            }
        </div >
    );
}

export default Daily