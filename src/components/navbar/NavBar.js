import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar} id="navBar">
      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('navBar')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        &nbsp;Home
      </button>
      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('projects')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        &nbsp;Projects
      </button>
      <button
        className={`${styles.button} ${styles.name}`}
        onClick={() =>
          document.getElementById('josh').scrollIntoView({ behavior: 'smooth' })
        }
      >
        Josh
      </button>
      <button className={styles.button}>&nbsp;Resume</button>
      <button className={styles.button}>&nbsp;Contact</button>
    </div>
  );
};

export default NavBar;
