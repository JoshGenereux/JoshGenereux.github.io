import React from "react";
import TechFlipper from "./techFlipper";
import techObj from '../texts/tech';


const TechStack = () => {

  return (
    <div className="body__info__tech">  
      <h1 className="tech-header">Tech Stack</h1>
      <div className="tech-stack-container">
        {techObj.map((t, i) => (
          <TechFlipper props={[t, i]} key={i} />
        ))}
      </div>
    </div>
  )
};

export default TechStack;