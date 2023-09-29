import React from 'react';
import styles from './projects.module.scss';
import earth from '../../assets/earth.png';
import mars from '../../assets/marspic.png';
import SideBorder from '../sideBorder/SideBorder';
import jupitor from '../../assets/jupiter.png';
import Jpass from './modals/jpass/Jpass';

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'josh'} />
      <div className={styles.current}>current</div>
      <div className={styles.header}>PROJECTS</div>
      <div className={styles.pickerContainer}>
        <div className={styles.pick}>
          <span className={styles.pickName}>JPass</span>
          <div className={styles.pickUnderline}></div>
        </div>
        <div className={styles.pick}>
          <span className={styles.pickName}>Live Fitness</span>
          <div className={styles.pickUnderline}></div>
        </div>
        <div className={styles.pick}>
          <span className={styles.pickName}>Weather</span>
          <div className={styles.pickUnderline}></div>
        </div>
        <div className={styles.pick}>
          <span className={styles.pickName}>Portfolio</span>
          <div className={styles.pickUnderline}></div>
        </div>
      </div>
      <div className={styles.container}>
        <Jpass />
      </div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
