import React from 'react';
import styles from './landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.sideBug}>
        <div className={styles.sideTop}></div>
        <div className={styles.sideInfo}>
          <ul>
            <li>3</li>
            <li>9</li>
            <li className={styles.dot}>.</li>
            <li>7</li>
            <li>5</li>
            <li>8</li>
            <li>9</li>
            <li>&nbsp;</li>
            <li>N</li>
            <li>&nbsp;</li>
            <li>8</li>
            <li>4</li>
            <li className={styles.dot}>.</li>
            <li>1</li>
            <li>9</li>
            <li>1</li>
            <li>6</li>
            <li>&nbsp;</li>
            <li>W</li>
          </ul>
        </div>
        <div className={styles.sideBottom}></div>
      </div>
      <div className={styles.subHeader}>Joshua Genereux</div>
      <div className={styles.header}>CHASE BUGS. BUILD DREAMS</div>

      <div className={styles.links}>
        <div className={styles.linkContainer}>
          <a href="https://www.linkedin.com/in/joshua-genereux-8292a8223/">
            &nbsp;LinkedIn
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a href="https://github.com/JoshGenereux">&nbsp;Github</a>
        </div>
        <div className={styles.linkContainer}>
          <a href="https://docs.google.com/document/d/1PjXril9NWsKXJ5Crr-fJNhXNuUJ7ncNDkWOFmR2ejYs/edit?usp=sharing">
            &nbsp;Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
