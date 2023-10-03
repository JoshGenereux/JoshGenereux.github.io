import React, { useEffect, useState } from 'react';
import styles from './projects.module.scss';
import SideBorder from '../sideBorder/SideBorder';
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
    jpassState: true,
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
      <div className={styles.container}>
        <div className={`${styles.project} ${styles.jpass}`}>
          <div className={styles.projectHeader}>JPass</div>
          <div className={styles.projectDescript}>
            A React build password manager.
          </div>
        </div>
        <div className={`${styles.project} ${styles.fitness}`}></div>
        <div className={`${styles.middle}`}></div>
        <div className={`${styles.project} ${styles.weather}`}></div>
        <div className={`${styles.project} ${styles.portfolio}`}></div>
        <div className={`${styles.project} ${styles.calories}`}></div>
      </div>
      <div className={styles.more}>More to come</div>
    </div>
  );
};

export default Projects;
