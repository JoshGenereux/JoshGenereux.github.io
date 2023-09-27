import React from 'react';
import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.subHeader}>Joshua Genereux</div>
      <div className={styles.header}>CHASE BUGS. BUILD DREAMS</div>

      <div className={styles.links}>
        <div className={styles.linkContainer}>
          <a href="https://www.linkedin.com/in/joshua-genereux-8292a8223/">
            LinkedIn
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a href="https://github.com/JoshGenereux">Github</a>
        </div>
        <div className={styles.linkContainer}>
          <a href="https://docs.google.com/document/d/1PjXril9NWsKXJ5Crr-fJNhXNuUJ7ncNDkWOFmR2ejYs/edit?usp=sharing">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
