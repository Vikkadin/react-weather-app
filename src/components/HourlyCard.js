import React from 'react'
import { iconUrlFromCode } from '../ApiService'
import styles from '../css/HourlyCard.module.css'


function Hourly({ items }) {
    return (
        <div className={styles.hourlycard}>
            <div className={styles.hourytitle}>
                <h2>Hourly Forecast</h2>
            </div>
            {items.map((item, index) => (
                <ul key={index} className={styles.hourlyitems}>
                    <li className={styles.hourlytemp}>{`${item.temp.toFixed()}°`}</li>
                    <li className={styles.hourlyicon}>
                        <img src={iconUrlFromCode(item.icon)} alt="wether ditails" />
                    </li>
                    <li className={styles.hourlytime}>{item.title}</li>
                </ul>
            ))
            }
        </div>
    );
}

export default Hourly
