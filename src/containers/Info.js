import React from "react";
import HeadShot from "../components/HeadShot";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";

const Info = () => {

  return (
    <div className="body__info">
      <HeadShot/>
      <AboutMe />
      <TechStack/>
    </div>
  )
};

export default Info;