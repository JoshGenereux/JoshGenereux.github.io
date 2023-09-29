import React from 'react';
import styles from './projects.module.scss';
import earth from '../../assets/earth.png';
import mars from '../../assets/marspic.png';
import SideBorder from '../sideBorder/SideBorder';
import jupitor from '../../assets/jupiter.png';

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'josh'} />
      <div className={styles.current}>current</div>
      <div className={styles.header}>PROJECTS</div>
      <div className={styles.container}></div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
