import React from 'react';
import styles from './jpass.module.scss';
import mars from '../../../../assets/marspic.png';

const Jpass = () => {
  return (
    <div className={styles.jpass}>
      <div className={styles.infoContainer}>
        <div className={styles.header}>JPass</div>
        <div className={styles.about}>
          JPass is a password manager. Built using React and Javascript, it
          stores and manages all of your passwords on a Heroku database,
          utilizing a SQL database.
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <span className={styles.number}>56%</span>
            <span className={styles.skill}>Javascript</span>
          </div>
          <div className={styles.box}>
            <span className={styles.number}>36%</span>
            <span className={styles.skill}>React</span>
          </div>
          <div className={styles.box}>
            <span className={styles.number}>56%</span>
            <span className={styles.skill}>HTML</span>
          </div>
        </div>
      </div>
      <div className={styles.picContainer}>
        <img className={styles.mars} src={mars} alt="" />
        <div className={styles.picCover}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Jpass;
