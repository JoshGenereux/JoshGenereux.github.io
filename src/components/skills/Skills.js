import React from 'react';
import styles from './skills.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <SideBorder down={'projects'} />
      <div className={styles.subHeader}>Discover</div>
      <div className={styles.header}>Skills</div>
      <div className={styles.container}></div>
    </div>
  );
};

export default Skills;
