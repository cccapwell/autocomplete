import React, {memo} from 'react';
import {Option} from '../constants';
import styles from './Input.module.css';

export const OptionList = memo<{options: Option[]}>(({options}) => {
    return (
        <div className={styles.wrapper}>
            {options.map(({id, value}) => (
                <button key={id}>{value}</button>
            ))}
        </div>
    );
});
