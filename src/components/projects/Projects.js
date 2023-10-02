import React, { useEffect, useState } from 'react';
import styles from './projects.module.scss';
import earth from '../../assets/earth.png';
import mars from '../../assets/marspic.png';
import SideBorder from '../sideBorder/SideBorder';
import jupitor from '../../assets/jupiter.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import purple from '../../assets/purple.png';
import { jpass, fitness, calories, weather, portfolio } from './texts';

const Projects = () => {
  const namesArr = [
    'JPass',
    'Live Fitness',
    'Weather',
    'Portfolio',
    'Calorie Tracker',
  ];

  const [showProject, setShowProject] = useState({
    jpassState: false,
    fitnessState: false,
    caloriesState: false,
    weatherState: false,
    portfolioState: false,
  });

  const switchTo = (e) => {
    e.preventDefault();
    const element = e.target.id;
    let text = '';

    switch (element) {
      case 'jupiter':
        setShowProject({ ...showProject });
        setShowProject({ jpassState: true });
        text = jpass;
        break;
      case 'mars':
        setShowProject({ ...showProject });
        setShowProject({ fitnessState: true });
        text = fitness;
        break;
      case 'purple':
        setShowProject({ ...showProject });
        setShowProject({ caloriesState: true });
        text = calories;
        break;
      case 'earth':
        setShowProject({ ...showProject });
        setShowProject({ weatherState: true });
        text = weather;
        break;
      case 'moon':
        setShowProject({ ...showProject });
        setShowProject({ portfolioState: true });
        text = portfolio;
        break;
      default:
        setShowProject({ ...showProject });
        setShowProject({ jpassState: true });
        text = jpass;
    }

    const header = document.getElementById('header');
    const description = document.getElementById('description');
    const top1 = document.getElementById('top1');
    const top2 = document.getElementById('top2');
    const top3 = document.getElementById('top3');
    const bottom1 = document.getElementById('bottom1');
    const bottom2 = document.getElementById('bottom2');
    const bottom3 = document.getElementById('bottom3');

    header.textContent = text.header;
    description.textContent = text.description;
    top1.textContent = text.top1;
    top2.textContent = text.top2;
    top3.textContent = text.top3;
    bottom1.textContent = text.bottom1;
    bottom2.textContent = text.bottom2;
    bottom3.textContent = text.bottom3;
  };

  return (
    <div className={styles.projects} id="projects">
      <SideBorder down={'josh'} />
      <div className={styles.current}>current</div>
      <div className={styles.projectsHeader}>PROJECTS</div>
      <div className={styles.pickerContainer}>
        {namesArr.map((name, i) => (
          <div className={styles.pick} key={i}>
            <span className={styles.pickName}>{name}</span>
            <div className={styles.pickUnderline}></div>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.jpass}>
          <div className={styles.infoContainer}>
            <div className={styles.header} id="header"></div>
            <div className={styles.about} id="description"></div>
            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <span className={styles.number} id="top1"></span>
                <span className={styles.skill} id="bottom1"></span>
              </div>
              <div className={styles.box}>
                <span className={styles.number} id="top2"></span>
                <span className={styles.skill} id="bottom2"></span>
              </div>
              <div className={styles.box}>
                <span className={styles.number} id="top3"></span>
                <span className={styles.skill} id="bottom3"></span>
              </div>
            </div>
          </div>
          <div className={styles.picContainer}>
            <img
              className={`${styles.planet} ${styles.planet__one}`}
              src={mars}
              alt=""
              id="mars"
              onClick={switchTo}
            />
            <img
              className={`${styles.planet} ${styles.planet__two}`}
              src={earth}
              alt=""
              id="earth"
              onClick={switchTo}
            />
            <img className={styles.sun} src={sun} alt="" />
            <img
              className={`${styles.planet} ${styles.planet__three}`}
              src={moon}
              alt=""
              id="moon"
              onClick={switchTo}
            />
            <img
              className={`${styles.planet} ${styles.planet__four}`}
              src={jupitor}
              alt=""
              id="jupiter"
              onClick={switchTo}
            />
            <img
              className={`${styles.planet} ${styles.planet__five}`}
              src={purple}
              alt=""
              id="purple"
              onClick={switchTo}
            />
          </div>
        </div>
      </div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
