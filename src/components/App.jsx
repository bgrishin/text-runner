import React from 'react';
import styles from './app.module.css'
import Typing from "./typing_part/Typing";
import Result from "./result_part/Result";
import {connect} from "react-redux";

const App = (props) => {
    return (<div className={styles.main}>
        <div className={props.isEnd ? `${styles.content} ${styles.slide}` : styles.content}>
            <Typing />
            <Result />
        </div>
    </div>)
}

const mapStateToProps = (state) => ({
    ...state.checks,
});

export default connect(mapStateToProps)(App)

