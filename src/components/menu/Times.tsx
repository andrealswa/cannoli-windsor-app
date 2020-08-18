import React, { useState } from 'react';
import styles from './Times.module.css';

interface Time {
  time: string;
  isAvailable: boolean;
}

export const Times = () => {
  const [times, setTimes] = useState([
    { time: '12:00PM', isAvailable: true },
    { time: '12:30PM', isAvailable: false },
    { time: '1:00PM', isAvailable: false },
    { time: '1:30PM', isAvailable: true },
    { time: '2:00PM', isAvailable: true },
    { time: '2:30PM', isAvailable: true },
    { time: '3:00PM', isAvailable: true },
    { time: '3:30PM', isAvailable: true },
    { time: '4:00PM', isAvailable: true },
    { time: '4:30PM', isAvailable: true },
    { time: '7:00PM', isAvailable: false },
    { time: '7:30PM', isAvailable: true },
    { time: '8:00PM', isAvailable: true },
    { time: '8:30PM', isAvailable: true },
    { time: '9:00PM', isAvailable: true },
    { time: '9:30PM', isAvailable: true },
    { time: '10:00PM', isAvailable: false },
    { time: '10:30PM', isAvailable: true },
    { time: '11:00PM', isAvailable: true },
  ]);
  const [timeChoice, setTimeChoice] = useState('null');

  const onTimePick = (time: Time) => {
    setTimeChoice(time.time);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>Pick a Time</h3>
        <h4 className={styles.subtitle}>
          The availability is yours once you place an order!
        </h4>
      </div>

      <div className={styles.timeColumnsContainer}>
        <div className={styles.afternoonColumn}>
          <h3>Afternoon</h3>
          {times.map((object, index) => {
            if (index < 10) {
              if (object.isAvailable) {
                // If time slot is open.
                return (
                  <div>
                    <button className={styles.button}>{object.time}</button>
                  </div>
                );
              } else {
                // If time slot is taken.
                return (
                  <div>
                    <button
                      className={styles.buttonDisabled}
                      onClick={() => {
                        onTimePick(object);
                      }}
                    >
                      {object.time}
                    </button>
                  </div>
                );
              }
            }
          })}
        </div>
        <div className={styles.eveningColumn}>
          <h3>Evening</h3>
          {times.map((object, index) => {
            if (index >= 10) {
              if (object.isAvailable) {
                // If time slot is open.
                return (
                  <div>
                    <button className={styles.button}>{object.time}</button>
                  </div>
                );
              } else {
                // If time slot is taken.
                return (
                  <div>
                    <button
                      className={styles.buttonDisabled}
                      onClick={() => {
                        onTimePick(object);
                      }}
                    >
                      {object.time}
                    </button>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};
