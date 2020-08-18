import React, { useState } from 'react';
import ReactCalendar, { OnChangeDateCallback } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css';

export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onPickDay: OnChangeDateCallback = (date: Date | Date[]) => {
    if (date instanceof Date) {
      // Check to ensure we have Date, not Date[]
      setDate(date);
    }
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.titleContainer}>
        <h3>Pick your day</h3>
        <h4 className={styles.subtitle}>We'll show you open time slots</h4>
      </div>
      <div className={styles.calendarContainer}>
        <ReactCalendar onChange={onPickDay} value={date} />
      </div>
    </div>
  );
};
