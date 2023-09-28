import React from 'react';
import styles from './sideBorder.module.scss';

const SideBorder = (props) => {
  const { down } = props;

  return (
    <div className={styles.border}>
      <div className={styles.sideBug}>
        <div className={styles.sideTop}></div>
        <div className={styles.sideInfo}>
          <button
            className={styles.homeButton}
            onClick={() =>
              document
                .getElementById('navBar')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className={styles.homeText}>H</span>
            <span className={styles.homeText}>O</span>
            <span className={styles.homeText}>M</span>
            <span className={styles.homeText}>E</span>
          </button>
          <div className={styles.seperator}></div>
          <button
            className={styles.joshButton}
            onClick={() =>
              document
                .getElementById(down)
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className={styles.homeText}>D</span>
            <span className={styles.homeText}>O</span>
            <span className={styles.homeText}>W</span>
            <span className={styles.homeText}>N</span>
          </button>
        </div>
        <div className={styles.sideBottom}></div>
      </div>
    </div>
  );
};

export default SideBorder;
