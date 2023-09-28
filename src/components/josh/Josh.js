import React from 'react';
import styles from './josh.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Josh = () => {
  return (
    <div className={styles.josh} id="josh">
      <SideBorder down={'resume'} />
      <div className={styles.picContainer}>
        <div className={styles.picCover}></div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.headerDescript}>What I Like</div>
        <div className={styles.header}>Hobbies</div>
        <div className={styles.clickerContainer}>
          <div className={`${styles.aboutClick}`}></div>
          <div className={`${styles.hobbiesClick}`}></div>
          <div className={`${styles.schoolClick}`}></div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.aboutText}>
            Hi, I'm Josh Genereux. I was raised mostly in Utah, untill I got my
            first Software development job, as a junior developer at
            Stratacache, in Dayton, Oh.
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.container}></div>
          <div className={styles.container}></div>
          <div className={styles.container}></div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton}>{'>'}</button>
          <div className={styles.centerButton}></div>
          <button className={styles.rightButton}>{'>'}</button>
        </div>
      </div>
      <div className={styles.name}>Sofware Developer</div>
    </div>
  );
};

export default Josh;
