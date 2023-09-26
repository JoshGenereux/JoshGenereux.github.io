import React from 'react';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.header}>Projects</div>
      <div className={styles.projectContainer}>
        <div className={styles.jpass}></div>
        <div className={styles.fitness}></div>
        <div className={styles.weather}></div>
      </div>
    </div>
  );
};

export default Projects;
