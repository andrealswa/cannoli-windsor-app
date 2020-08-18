import React from 'react';
import styles from './ComingSoon.module.css';

export const ComingSoon = () => {
  return (
    <div className={styles.notFoundLogoContainer}>
      <h1 className={styles.notFoundLogo}>Coming Soon!</h1>
      <div className={styles.content}>
        <p>Please feel free to reach us on Instagram</p>
        <a href="https://www.instagram.com/cannoliwindsor/">
          <img
            className={styles.instaSocialMedia}
            src="https://cannoli-windsor.s3.amazonaws.com/cannoli-images/instagram-sketched.svg"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};
