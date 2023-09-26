import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('home')
              .scrollTo({ top: 0, behavior: 'smooth' })
          }
        >
          Josh
        </li>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('info')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          About
        </li>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('techStack')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Tech-Stack
        </li>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Projects
        </li>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('techStack')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Resume
        </li>
        <li
          className={styles.navLink}
          onClick={() =>
            document
              .getElementById('techStack')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
