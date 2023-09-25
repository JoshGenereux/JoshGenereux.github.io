import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import forest from '../../assets/forest2.jpeg';
import pic from '../../assets/facepic.jpeg';
import TechStack from '../../components/links/Links';
import styles from './home.module.scss';

function Home() {

  return (
    <div className={styles.home}  id="home">
      <img className={styles.forest} alt="" src={forest} />
      <NavBar/>
      <Header/>
      <div className={styles.picContainer}>
        <img className={styles.infoPic} src={pic} alt="" />
      </div>
      <TechStack/>
    </div>
  );
}

export default Home;
