import React from 'react';
import styles from './skills.module.scss';
import SideBorder from '../sideBorder/SideBorder';

const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <SideBorder down={'contact'} />
      <div className={styles.subHeader}>Discover</div>
      <div className={styles.header}>Resume</div>
      <div className={styles.headerBorder}></div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.work}>Work:</div>
          <div className={styles.descript}>
            <span className={styles.dev}>Stratacache</span>
            &nbsp; Currently I work as a Junior Software Developer at
            Stratacache. I have worked here since May 2022, and do front end
            development using Vue and Javascript.
          </div>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.education}>Education:</div>
          <div className={styles.descript}>
            <span className={styles.dev}>
              DevMountain Web Development Bootcamp
              <br />
            </span>
            At DevMountain I learned the basics of web development. Learning
            Javascript, React, HTML, CSS and SQL, I applied my new found
            knowlege by building two full stack applications, utilzing all of
            the above skills.
          </div>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.skillsName}>Skills:</div>
          <div className={styles.skillsBox}>
            <div className={styles.box}>
              <div className={styles.frontEnd}>Front End:</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>Javascript</li>
                <li className={styles.frontLi}>ES6</li>
                <li className={styles.frontLi}>HTML</li>
                <li className={styles.frontLi}>CSS</li>
                <li className={styles.frontLi}>React.js</li>
                <li className={styles.frontLi}>Vue.js</li>
                <li className={styles.frontLi}>Javascript</li>
              </ul>
            </div>
            <div className={styles.box}>
              <div className={styles.frontEnd}>Back End:</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>Node.js</li>
                <li className={styles.frontLi}>Java</li>
                <li className={styles.frontLi}>Postman</li>
                <li className={styles.frontLi}>Algorithms</li>
                <li className={styles.frontLi}>SQL</li>
                <li className={styles.frontLi}>Axios</li>
              </ul>
            </div>
            <div className={styles.box}>
              <div className={styles.frontEnd}>Misc:</div>
              <ul className={styles.frontList}>
                <li className={styles.frontLi}>Jira</li>
                <li className={styles.frontLi}>GIT</li>
                <li className={styles.frontLi}>Github</li>
                <li className={styles.frontLi}>CSS</li>
                <li className={styles.frontLi}>Slack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
