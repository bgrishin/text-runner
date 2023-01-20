import React from 'react';
import styles from './mistakes.module.css'

const Mistakes = (props) => {
    return (<div className={styles.mistakes}>
        <div className={styles.mistakes_value}>
            <p>{props.value}</p>
        </div>
        <p>Mistakes</p>
        <div className={styles.bar}> </div>
    </div>)
}

export default Mistakes
