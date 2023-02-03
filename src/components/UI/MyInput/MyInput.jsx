import React from 'react';
import styles from "./MyInput.module.scss"

const MyInput = ({value, onChange, ...props}) => {

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={"Enter a password"}
            className={styles.style}
            {...props}
        >
        </input>
    );
};

export default MyInput;