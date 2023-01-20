import React from 'react';
import styles from './time.module.css'
import {connect} from "react-redux";

const Time = (props) => {
    return (<div className={styles.time_block}>
        <p className={styles.time}><i className="far fa-clock"> </i> {props.timeLeft} seconds</p>
    </div>)
}

const mapStateToProps = (state) => ({
    ...state.timer,
});

export default connect(mapStateToProps)(Time)
