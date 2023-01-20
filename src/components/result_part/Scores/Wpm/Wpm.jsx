import React from 'react';
import styles from './wpm.module.css'

const Wpm = (props) => {
    return (<div className={styles.wpm}>
        <div className={styles.wpm_value}>
            <p>{props.value}</p>
        </div>
        <p>WPM</p>
        <div className={styles.bar}> </div>
    </div>)
}

export default Wpm
