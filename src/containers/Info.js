import React from "react";
import TechStack from "../components/TechStack";
import aboutMe from '../texts/aboutMe.json';
import pic from '../assets/facepic.jpeg';

const Info = () => {

  return (
    <div className="body__info">
      <div className="body__info__info">
        <div className="info-pic-container">
          <img className="info-pic" src={pic} alt="" />
        </div>
        <h1 className="aboutme-header">About Me</h1>
        <div className="aboutme-text">{aboutMe.about}</div>
      </div>

      <TechStack/>
    </div>
  )
};

export default Info;