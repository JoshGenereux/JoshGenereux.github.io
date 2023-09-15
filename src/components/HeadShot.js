import React from "react";  
import pic from '../assets/facepic.jpeg';

const HeadShot = () => {

  return (
    <div className="body__info__pic">
      <img className="pic" src={pic} alt="" /> 
    </div>
  )
};

export default HeadShot;