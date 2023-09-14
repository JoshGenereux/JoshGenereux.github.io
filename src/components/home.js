import React from "react";
import aboutMe from '../aboutMe.json';

function Home() {
  // const me = JSON.parse(aboutMe);
  console.log(aboutMe.about)

  return (
    <div className="home">
        <header className="header">
          <div className="header__name">Josh Genereux</div>
          <div className="header__title">Software Developer</div>
        </header>

        <div className="body">

          <div className="body__info">
            <div className="body__info__pic">
            
            </div>
            <div className="body__info__info">
              <h1 className="aboutme-header">About Me</h1>
              <div className="aboutme-text">{aboutMe.about}</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
