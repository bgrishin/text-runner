import React from 'react';
import styles from './tip.module.css'
import {connect} from "react-redux";

const Tip = (props) => {
    return (<p className={props.isTipHidden ? `${styles.tip} ${styles.hidden}` : styles.tip}>start typing to start timer</p>)
}

const mapStateToProps = (state) => ({
    ...state.checks,
});

export default connect(mapStateToProps)(Tip)

