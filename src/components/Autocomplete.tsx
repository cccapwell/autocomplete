import {memo, useEffect, useState} from 'react';
import {Input} from './Input';
import styles from './Autocomplete.module.css';
import {OptionList} from './OptionList';
import {OPTIONS} from '../constants';

export const Autocomplete = memo((props) => {
    const [searchInput, setSearchInput] = useState('');
    const [options, setOptions] = useState(OPTIONS);

    useEffect(() => {
        if (!searchInput) setOptions(OPTIONS);

        setOptions(OPTIONS.filter(({value}) => value.includes(searchInput)));
    }, [searchInput]);

    return (
        <>
            <div className={styles.wrapper}>
                <Input value={searchInput} handlerChange={setSearchInput} />
                {searchInput.length > 1 && <OptionList options={options} />}
            </div>
            <div className={styles.debugging}>
                value - {searchInput}
            </div>
        </>
    );
});
