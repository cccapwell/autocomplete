import React, {memo} from 'react';
import styles from './Input.module.css';

export const Input = memo<{value: string, handlerChange: (v: string) => void}>(({value, handlerChange}) => {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                value={value}
                onChange={({target}: React.ChangeEvent<HTMLInputElement>) => handlerChange(target.value)}
            />
            <button className={styles.close} onClick={() => handlerChange('')}>x</button>
        </div>
    );
});
