import React from 'react';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar} id="navBar">
      <button
        className={`${styles.button} ${styles.name}`}
        onClick={() =>
          document.getElementById('josh').scrollIntoView({ behavior: 'smooth' })
        }
      >
        About Me
      </button>
      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('projects')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Projects
      </button>

      <button
        className={styles.button}
        onClick={() =>
          document
            .getElementById('skills')
            .scrollIntoView({ behavior: 'smooth' })
        }
      >
        Skills
      </button>
      <button className={styles.button}>Resume</button>
      <button className={styles.button}>Contact</button>
    </div>
  );
};

export default NavBar;
