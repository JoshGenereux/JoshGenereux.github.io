import React from "react";

const TechFlipper = ({props}) => {
  const name = props[0][0];
  const asset = props[0][1];

  return(
    <div className="tech-flipper">  
      <h1 className="tech-name">{name}</h1>
      <img className={`tech ${name}`} src={asset} alt=""/>
    </div>
  )
};

export default TechFlipper;