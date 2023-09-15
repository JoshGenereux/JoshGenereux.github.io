import React from "react";
import tech from '../texts/techStack.json';

const TechStack = () => {

  return (
    <div className="body__info__tech">  
      <h1 className="tech-header">Tech Stack</h1>
      <div className="tech-stack">{tech.techStack}</div>
    </div>
  )
};

export default TechStack;