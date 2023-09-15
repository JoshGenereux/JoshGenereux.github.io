import React from "react";
import aboutMe from '../texts/aboutMe.json';

const AboutMe = () => {

  return (
    <div className="body__info__info">
      <h1 className="aboutme-header">About Me</h1>
      <div className="aboutme-text">{aboutMe.about}</div>
    </div>
  )
};

export default AboutMe;