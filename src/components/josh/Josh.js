import React from 'react';
import styles from './josh.module.scss';
import SideBorder from '../sideBorder/SideBorder';
import { useState } from 'react';
import texts from '../../texts/aboutMe.json';
import hobbies from '../../texts/hobbies.json';

const Josh = () => {
  const [header, setHeader] = useState(texts.header);
  const [subHeader, setSubHeader] = useState(texts.subheader);
  const [about, setAbout] = useState(texts.about);
  const [top, setTop] = useState(texts.top);
  const [bottom, setBottom] = useState(texts.bottom);
  const [top2, setTop2] = useState(texts.top2);
  const [bottom2, setBottom2] = useState(texts.bottom2);
  const [top3, setTop3] = useState(texts.top3);
  const [bottom3, setBottom3] = useState(texts.bottom3);
  const [description, setDescription] = useState(texts.description);

  const switchNext = (e) => {
    e.preventDefault();
    setHeader(hobbies.header);
    setSubHeader(hobbies.subheader);
    setAbout(hobbies.about);
    setTop(hobbies.top);
    setTop2(hobbies.top2);
    setTop3(hobbies.top3);
    setBottom(hobbies.bottom);
    setBottom2(hobbies.bottom2);
    setBottom3(hobbies.bottom3);
    setDescription(hobbies.description);
  };

  console.log(top3);

  return (
    <div className={styles.josh} id="josh">
      <SideBorder className={styles.SideBorder} down={'resume'} />
      <div className={styles.picContainer}>
        <div className={styles.picCover}></div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.headerDescript}>{subHeader}</div>
        <div className={styles.header}>{header}</div>
        <div className={styles.clickerContainer}>
          <div className={`${styles.aboutClick}`}></div>
          <div className={`${styles.hobbiesClick}`}></div>
          <div className={`${styles.schoolClick}`}></div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.aboutText}>{about}</div>
        </div>
        <div className={styles.containers}>
          <div className={styles.container}>
            <span className={styles.top}>{top}</span>
            <span className={styles.bottom}>{bottom}</span>
          </div>
          <div className={styles.container}>
            <span className={styles.top}>{top2}</span>
            <span className={styles.bottom}>{bottom2}</span>
          </div>
          <div className={styles.container}>
            <span className={styles.top}>{top3}</span>
            <span className={styles.bottom}>{bottom3}</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.leftButton}>{'>'}</button>
          <div className={styles.centerButton}>{description}</div>
          <button className={styles.rightButton} onClick={switchNext}>
            {'>'}
          </button>
        </div>
      </div>
      <div className={styles.name}>Sofware Developer</div>
    </div>
  );
};

export default Josh;
