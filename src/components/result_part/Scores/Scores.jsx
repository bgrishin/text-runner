import React from 'react';
import styles from './scores.module.css'
import Wpm from "./Wpm/Wpm";
import Cpm from "./Cpm/Cpm";
import Mistakes from "./Mistakes/Mistakes";
import {connect} from "react-redux";

const Scores = (props) => {
    return (<div className={styles.scores}>
        <Wpm value={props.wpm}/>
        <Cpm value={props.cpm}/>
        <Mistakes value={props.mistakes}/>
    </div>)
}

const mapStateToProps = (state) => ({
    ...state.scores,
});

export default connect(mapStateToProps)(Scores)

