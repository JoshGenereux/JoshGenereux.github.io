import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.button}>About</div>
      <div className={styles.button}>spaced</div>
      <div className={styles.button}>Josh</div>
      <div className={styles.button}>Projects</div>
      <div className={styles.button}>Contact</div>
    </div>
  );
};

export default NavBar;
