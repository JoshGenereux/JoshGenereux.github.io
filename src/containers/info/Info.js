import React, { useRef } from "react";
import aboutMe from '../../texts/aboutMe.json';
import styles from './info.module.scss'

const Info = () => {

  const infoArea = useRef();

  return (
    <div className={styles.info} ref={infoArea}>
      <div className={styles.container}>
        <h1 className={styles.aboutMeHeader}>About Me</h1>
        <div className={styles.aboutMeText}>{aboutMe.about}</div>
      </div>
    </div>
  )
};

export default Info;