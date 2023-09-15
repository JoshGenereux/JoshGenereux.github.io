import React from "react";

const TechFlipper = ({props}) => {
  console.log(props)
  const name = props[0][0];
  const asset = props[0][1];

  return(
    <div className="tech-flipper">  
      <h1 className="tech-name">{name}</h1>
      <img className={`tech ${props[1]}`} src={asset} alt=""/>
    </div>
  )
};

export default TechFlipper;