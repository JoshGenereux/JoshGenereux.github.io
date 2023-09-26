import React from 'react';
import Header from '../../components/header/Header';
import pic from '../../assets/facepic.jpeg';
import Links from '../../components/links/Links';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.home} id="home">
      <Header />
      <div className={styles.bottomContainer}>
        <div className={styles.picContainer}>
          <img className={styles.infoPic} src={pic} alt="" />
        </div>
        <Links />
      </div>
    </div>
  );
}

export default Home;
