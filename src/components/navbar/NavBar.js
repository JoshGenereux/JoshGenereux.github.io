import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.button}>Home</div>
      <div className={styles.button}>Projects</div>
      <div className={`${styles.button} ${styles.name}`}>Josh</div>
      <div className={styles.button}>Resume</div>
      <div className={styles.button}>Contact</div>
    </div>
  );
};

export default NavBar;
