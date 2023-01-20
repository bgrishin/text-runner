import React from 'react';
import styles from './cpm.module.css'

const Cpm = (props) => {
    return (<div className={styles.cpm}>
        <div className={styles.cpm_value}>
            <p>{props.value}</p>
        </div>
        <p>CPM</p>
        <div className={styles.bar}> </div>
    </div>)
}

export default Cpm
