import React from 'react';
import styles from './Summary.module.css';

export const Summary = () => {
  return (
    <div className={styles.container}>
      <h1>You have chosen</h1>
      <div className={styles.choiceDetailsContainer}>
        <h3>Pickup for</h3>
        <h3>August 19 2020</h3>
        <h3>1:00 PM</h3>
      </div>
    </div>
  );
};
