import React from "react";
import styles from './Header.module.scss'

function Header () {

  return(
    <header className={styles.header}>
      <div className={styles.header__name}>Josh Genereux</div>
      <div className={styles.header__title}>Software Developer</div>
    </header>
  )
}

export default Header;