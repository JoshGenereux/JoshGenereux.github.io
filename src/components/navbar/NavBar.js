
import styles from './NavBar.module.scss'

const NavBar = () =>{
  const scrollTo = (e) => {  
    console.log(window.document.all)
  }

  return(
    <nav className={styles.navContainer}>
      <ul>
        <li className={styles.navLink}>Josh G</li>
        <li className={styles.navLink}>About Me</li>
        <li className={styles.navLink} onClick={scrollTo}>Tech Stack</li>
        <li className={styles.navLink}>Projects</li>
        <li className={styles.navLink}>Resume</li>
        <li className={styles.navLink}>Contact</li>
      </ul>
    </nav>
  )
};

export default NavBar;