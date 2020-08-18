import React from 'react';
import styles from './Page.module.css';
import send from './send.svg';
import mail from './mail.svg';

export const Page = () => {
  return (
    <div>
      <div className={styles.topSpacing}></div>

      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>You have questions, we have answers</h1>
          <h3 className={styles.subTitle}>
            Send us a message with your email and we will get back to you!
          </h3>

          <div className={styles.contactUsContainer}>
            <h4>
              <img className={styles.mailIcon} src={mail} alt="mail envelope" />
              Contact Us
            </h4>
          </div>

          <div className={styles.emailContainer}>
            <h5>Email</h5>
            <input
              className={styles.email}
              type="email"
              placeholder="myemail@gmail.com"
            />
          </div>

          <div className={styles.messageContainer}>
            <h5>Message</h5>
            <textarea
              className={styles.textarea}
              placeholder="Hello."
            ></textarea>
          </div>

          <div className={styles.sendContainer}>
            <button className={styles.sendButton}>
              <img
                className={styles.sendIcon}
                src={send}
                alt="paper airplane"
              />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
