// components/Loader.js
import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader}>Loading...</div>
  </div>
);

export default Loader;