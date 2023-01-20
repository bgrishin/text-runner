import React from 'react';
import styles from './controls.module.css'
import Time from "./Time/Time";
import Tip from "./Tip/Tip";
import Again from "./Again/Again";

const Controls = () => {
    return (<div className={styles.controls}>
        <Time />
        <Tip />
        <Again />
    </div>)
}

export default Controls
