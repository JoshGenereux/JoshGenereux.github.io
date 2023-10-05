import React from 'react';
import styles from './contact.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('email sent, Thank you!');
  };

  return (
    <div className={styles.contact} id="contact">
      <SideBorder down="" />
      <div className={styles.header}>Contact Me</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.nameContainer}>
          <input
            id="name"
            type="text"
            className={styles.nameInput}
            placeholder="name"
          />
        </div>
        <div className={styles.emailContainer}>
          <input
            id="email"
            type="text"
            className={styles.emailInput}
            placeholder="email"
          />
        </div>
        <div className={styles.textContainer}>
          <textarea
            id="text"
            typet="text"
            className={styles.textInput}
            placeholder="your message here"
          />
        </div>
        <button type="submit" className={styles.button}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
