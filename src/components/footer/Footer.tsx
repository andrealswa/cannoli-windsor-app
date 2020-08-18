import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.topMargin}>
      <div className={styles.text}>
        <div className={styles.copyright}>
          Copyright © 2020 Cannoli Windsor. All rights reserved.
        </div>
        <div className={styles.links}>
          <Link className={styles.link} to="/contact">
            Contact Us
          </Link>
          <div className={styles.bar}></div>
          <Link className={styles.link} to="/faq">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};
