import React from 'react';
import styles from './contact.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import mars from '../../assets/marspic.png';

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <SideBorder down="" />
      <div className={styles.header}>Contact Me</div>
      <div className={styles.picContainer}>
        <img src={mars} alt="" className={styles.planet} />
      </div>
    </div>
  );
};

export default Contact;
