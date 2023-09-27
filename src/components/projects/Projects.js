import React from 'react';
import styles from './projects.module.scss';
import earth from '../../assets/earth.png';
import beach from '../../assets/beach.jpeg';
import mars from '../../assets/marspic.png';
import moon from '../../assets/moon.png';
import moonSurface from '../../assets/moonsurface.jpeg';
import marsSurface from '../../assets/marssurface.jpeg';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.current}>current</div>
      <div className={styles.header}>PROJECTS</div>
      <div className={styles.container}>
        <div className={styles.box}>
          <img src={earth} alt="" className={styles.planet} />
          <h1>JPass</h1>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Sequelize</li>
            <li>Node</li>
          </ul>
          <img src={beach} alt="" className={styles.beach} />
          <p>
            Jpass is a password manager, built using React.js, Javascript, CSS,
            HTML and SQL. Storing all of the passowords in a SQL database, and
            utilizing Sequelize.js in the back end to send the information over.
          </p>
        </div>
        <div className={styles.box}>
          <img src={mars} alt="" className={styles.planet} />
          <h1>JPass</h1>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Sequelize</li>
            <li>Node</li>
          </ul>
          <img src={marsSurface} alt="" className={styles.beach} />
          <p>
            Jpass is a password manager, built using React.js, Javascript, CSS,
            HTML and SQL. Storing all of the passowords in a SQL database, and
            utilizing Sequelize.js in the back end to send the information over.
          </p>
        </div>
        <div className={styles.box}>
          <img
            src={moon}
            alt=""
            className={`${styles.planet} ${styles.moon}`}
          />
          <h1>JPass</h1>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Sequelize</li>
            <li>Node</li>
          </ul>
          <img src={moonSurface} alt="" className={styles.beach} />
          <p>
            Jpass is a password manager, built using React.js, Javascript, CSS,
            HTML and SQL. Storing all of the passowords in a SQL database, and
            utilizing Sequelize.js in the back end to send the information over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
