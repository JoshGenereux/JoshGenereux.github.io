import React from 'react';
import styles from './skills.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import javascript from '../../assets/javascript.png';

const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <SideBorder down={'projects'} />
      <div className={styles.subHeader}>Discover</div>
      <div className={styles.header}>Skills</div>
      <div className={styles.container}>
        <div className={styles.skillContainer}>JS</div>
        <div className={styles.skillContainer}>React</div>
        <div className={styles.skillContainer}>Java</div>
        <div className={styles.skillContainer}>HTML</div>
        <div className={styles.skillContainer}>CSS</div>
        <div className={styles.skillContainer}>VUE</div>
        <div className={styles.skillContainer}>NODE</div>
        <div className={styles.skillContainer}></div>
      </div>
    </div>
  );
};

export default Skills;
