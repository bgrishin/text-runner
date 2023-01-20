import React from 'react';
import styles from './result.module.css'
import Scores from "./Scores/Scores";
import Restart from "./Restart/Restart";

const Result = () => {
    return (<div className={styles.information}>
        <Scores />
        <Restart />
    </div>)
}

export default Result
