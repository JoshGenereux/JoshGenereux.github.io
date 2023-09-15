import React from "react";
import Header from "../components/Header";
import Info from './Info'

function Home() {

  return (
    <div className="home">
      <Header/>
      <div className="body">
        <Info/>
      </div>
    </div>
  );
}

export default Home;
