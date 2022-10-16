import React from 'react'
import { BiSearchAlt, BiCurrentLocation } from 'react-icons/bi'
import styles from '../css/Form.module.css'

function Form() {
    return (
        <form type="submitForm" className={styles.searchbar} onSubmit={''} >
            <input
                value={''}
                onChange={''}
                type="text"
                name="city"
                placeholder='Type city...'
                autoComplete='off'
                autoFocus
                required />
            <button type="submit" className={styles.sicon}>
                <BiSearchAlt
                    onClick={''}
                />
            </button>
            <button type="button" className={styles.licon}>
                <BiCurrentLocation
                    onClick={''}
                />
            </button>
        </form >
    )
}

export default Form