import React from 'react';
import styles from './again.module.css'

const Again = () => {
    return (<button className={styles.again} onClick={() => window.location.reload()}><i className="fas fa-redo"></i> Try again</button>)
}

export default Again
