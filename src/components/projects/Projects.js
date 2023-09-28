import React from 'react';
import styles from './projects.module.scss';
import earth from '../../assets/earth.png';
import beach from '../../assets/beach.jpeg';
import mars from '../../assets/marspic.png';
import moon from '../../assets/moon.png';
import moonSurface from '../../assets/moonsurface.jpeg';
import marsSurface from '../../assets/marssurface.jpeg';
import SideBorder from '../sideBorder/SideBorder';

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'josh'} />
      <div className={styles.current}>current</div>
      <div className={styles.header}>PROJECTS</div>
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={earth} alt="" className={styles.planet} />
          <h1 className={styles.jpass}>JPass</h1>
          <ul className={styles.techStack}>
            <li className={styles.tech}>React</li>
            <li className={styles.tech}>Javascript</li>
            <li className={styles.tech}>Sequelize</li>
            <li className={styles.tech}> Node</li>
          </ul>
          <img src={beach} alt="" className={styles.surface} />
          <p className={styles.aboutApp}>
            Jpass is a password manager, built using React.js, Javascript, CSS,
            HTML and SQL. Storing all of the passowords in a SQL database, and
            utilizing Sequelize.js in the back end.
          </p>
        </div>
        <div className={styles.box}>
          <img src={mars} alt="" className={styles.planet} />
          <h1 className={styles.liveFitness}>Live Fitness</h1>
          <ul className={styles.techStack}>
            <li className={styles.tech}>HTML</li>
            <li className={styles.tech}>css</li>
            <li className={styles.tech}>Javascript</li>
          </ul>
          <img src={marsSurface} alt="" className={styles.surface} />
          <p className={styles.aboutApp}>
            Live Fitness, is a fitness tracker and workout app, that stores all
            of your workouts on a SQL database. You can create a workout each
            day, and pick from hundreds of different exercises from a list.
          </p>
        </div>
        <div className={styles.box}>
          <img
            src={moon}
            alt=""
            className={`${styles.planet} ${styles.moon}`}
          />
          <h1 className={styles.weather}>Weather</h1>
          <ul className={styles.techStack}>
            <li className={styles.tech}>React</li>
            <li className={styles.tech}>Javascript</li>
            <li className={styles.tech}>API</li>
            <li className={styles.tech}>Node</li>
          </ul>
          <img src={moonSurface} alt="" className={styles.surface} />
          <p className={styles.aboutApp}>
            A simple weather app, hooked up to an API. you can log in and search
            any location in the worls, and the api will make a call and send you
            back the information.
          </p>
        </div>
      </div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
