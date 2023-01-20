import React, {useRef} from 'react';
import styles from './text.module.css'
import {connect} from "react-redux";
import {TIMER, INIT_TYPING, UPDATE_INPUT_VALUE} from "../../../common/data/actionTypes";

let timer;

const Text = (props) => {
    const input = useRef()

    const focusInput = () => input.current.focus()

    // detecting all actions to focus input
    document.addEventListener('keydown', focusInput)
    return (
        <>
            <input type="text" value={props.state.inputs.inputValue} onChange={(e) => {
                props.initTyping(e.target.value)
                props.initTimer(props.state.timer.timeLeft)
            }} ref={input} autoFocus/>
            <div className={styles.text} translate="no" onClick={focusInput}>
                <p>
                    <span className={`${props.state.checks.isCorrectOrIncorrectInputHighlighting ? `${styles.correct} ${styles.active}` : styles.correct }`}>{props.state.inputs.correct}</span>
                    <span className={`${!props.state.checks.isCorrectOrIncorrectInputHighlighting ? `${styles.incorrect} ${styles.active}` : styles.incorrect }`}>{props.state.inputs.incorrect}</span>
                    <span className="empty">{props.state.inputs.empty}</span>
                </p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    state: { ...state },
});

const mapDispatchToProps = (dispatch) => ({
    initTyping: (inputValue) => {
        dispatch({type: UPDATE_INPUT_VALUE, text: inputValue})
        dispatch({type: INIT_TYPING})
    },
    initTimer: () => {
        if(!timer) {
            timer = setInterval(() => {
                dispatch({type: TIMER})
            }, 1000)
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Text)
