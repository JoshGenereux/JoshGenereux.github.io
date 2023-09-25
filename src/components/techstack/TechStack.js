import React from "react";
import TechFlipper from "./techFlipper";
import techObj from './tech';
import styles from './techstack.module.scss';


const TechStack = () => {

  return (
    <div className={styles.tech}  id="techStack">  
      <h1 className={styles.header}>My Tech Stack</h1>
      <div className={styles.techStackContainer}>
        {techObj.map((t, i) => (
          <TechFlipper props={[t, i]} key={i} />
        ))}
      </div>
    </div>
  )
};

export default TechStack;