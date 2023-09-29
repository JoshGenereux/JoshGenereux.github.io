import React from 'react';
import styles from './sideBorder.module.scss';

const SideBorder = (props) => {
  const { down } = props;

  const downArr = down.toUpperCase().split('');

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
            {downArr.map((e, i) => (
              <span className={styles.homeText} key={i}>
                {e}
              </span>
            ))}
          </button>
        </div>
        <div className={styles.sideBottom}></div>
      </div>
    </div>
  );
};

export default SideBorder;
