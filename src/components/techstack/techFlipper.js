import React from "react";
import styles from './techstack.module.scss'

const TechFlipper = ({props}) => {
  const name = props[0][0];
  const asset = props[0][1];

  return(
    <div className={styles.flipper}>  
      <h1 className={styles.name}>{name}</h1>
      <img className={styles[name]} src={asset} alt=""/>
    </div>
  )
};

export default TechFlipper;