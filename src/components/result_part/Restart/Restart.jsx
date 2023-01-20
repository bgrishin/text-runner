import React from 'react';
import styles from './restart.module.css'

const Restart = () => {
    return (<div className={styles.button_block}>
        <button className={styles.restart} onClick={() => window.location.reload()}><i className="fas fa-redo"> </i> Restart</button>
    </div>)
}

export default Restart
