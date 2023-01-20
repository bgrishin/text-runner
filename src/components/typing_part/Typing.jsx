import React from 'react';
import Text from "./Text/Text";
import styles from './typing.module.css'
import Controls from "./Controls/Controls";

const Typing = () => {
    return (<div className={styles.playground}>
        <Text />
        <Controls />
    </div>)
}

export default Typing
