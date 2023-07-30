import React from 'react';
import styles from './App.module.css';
import {Autocomplete} from './components/Autocomplete';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBox}>
        <Autocomplete />
      </div>
    </div>
  );
}

export default App;
