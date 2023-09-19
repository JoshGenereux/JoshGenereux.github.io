import React from "react";
import TechStack from "../components/TechStack";
import aboutMe from '../texts/aboutMe.json';

const Info = () => {

  return (
    <div className="body__info">
      <div className="body__info__info">
        <h1 className="aboutme-header">About Me</h1>
        <div className="aboutme-text">{aboutMe.about}</div>
      </div>

      <TechStack/>
    </div>
  )
};

export default Info;