import {
    UPDATE_INPUT_VALUE,
    INIT_TYPING,
    TIMER,
} from "../common/data/actionTypes";
import texts from "../common/data/texts";

const initialText = texts[Math.floor(Math.random() * texts.length)]

const initialState = {
    timer: {
        timeLeft: 60
    },
    scores: {
        cpm: 0,
        wpm: 0,
        mistakes: 0
    },
    text: {
        currentText: initialText,
        currentSymbol: 0,
        totalLength: initialText.length
    },
    checks: {
        isMistake: false,
        isTipHidden: false,
        isEnd: false,
        isCorrectOrIncorrectInputHighlighting: true,
    },
    inputs: {
        inputValue: '',
        correct: '',
        incorrect: '',
        empty: initialText
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INIT_TYPING: {
            let stateCopy =
                {
                    timer: { ...state.timer },
                    scores: { ...state.scores },
                    text: { ...state.text },
                    checks: { ...state.checks, isTipHidden: true },
                    inputs: { ...state.inputs }
                }

            const symbols = stateCopy.inputs.empty

            let typed = stateCopy.inputs.inputValue.split("")[stateCopy.text.currentSymbol]
            if(!typed) {
                stateCopy.text.currentSymbol--
                if(stateCopy.checks.isMistake) {
                    stateCopy.checks.isMistake = false
                    stateCopy.checks.isCorrectOrIncorrectInputHighlighting = true
                    stateCopy.text.currentText = `${stateCopy.inputs.incorrect}${stateCopy.text.currentText}`
                    stateCopy.inputs.empty = stateCopy.text.currentText
                    stateCopy.inputs.incorrect = ''
                } else {
                    stateCopy.text.currentText = `${stateCopy.inputs.correct[stateCopy.inputs.correct.length - 1]}${stateCopy.text.currentText}`
                    stateCopy.inputs.incorrect = ''
                    stateCopy.inputs.correct = stateCopy.inputs.correct.slice(0, -1)
                    stateCopy.inputs.empty = stateCopy.text.currentText
                }
            } else {
                if(!stateCopy.checks.isMistake) {
                    if(symbols[0] === typed) {
                        stateCopy.text.currentText = stateCopy.text.currentText.slice(1)
                        stateCopy.inputs.correct += stateCopy.inputs.empty[0]
                        stateCopy.inputs.empty = stateCopy.text.currentText
                    } else {
                        stateCopy.scores.mistakes++
                        stateCopy.checks.isCorrectOrIncorrectInputHighlighting = false
                        stateCopy.text.currentText = stateCopy.text.currentText.slice(1)
                        stateCopy.inputs.incorrect = stateCopy.inputs.empty[0]
                        stateCopy.inputs.empty = stateCopy.text.currentText
                        stateCopy.checks.isMistake = true
                    }
                    stateCopy.text.currentSymbol++
                    stateCopy.scores.cpm = stateCopy.text.currentSymbol - stateCopy.scores.mistakes
                    stateCopy.scores.wpm = Math.round((((stateCopy.text.currentSymbol - stateCopy.scores.mistakes) / 5) / (60 - stateCopy.timer.timeLeft)) * 60)
                } else {
                    stateCopy.inputs.inputValue = stateCopy.inputs.inputValue.substring(0, stateCopy.inputs.inputValue.length - 1)
                }
            }

            if(stateCopy.text.currentSymbol === stateCopy.text.totalLength || stateCopy.checks.isEnd) {
                return {
                    ...stateCopy,
                    checks: { ...stateCopy.checks, isEnd: true }
                }
            }

            return stateCopy;
        }

        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                inputs: { ...state.inputs, inputValue: action.text }
            }

        case TIMER:
            const stateCopy = {
                ...state,
                timer: { timeLeft: state.timer.timeLeft },
                checks: { ...state.checks }
            }
            stateCopy.timer.timeLeft > 0 ? stateCopy.timer.timeLeft = stateCopy.timer.timeLeft - 1 : stateCopy.checks.isEnd = true
            return stateCopy;

        default:
            return { ...state }
    }
}
