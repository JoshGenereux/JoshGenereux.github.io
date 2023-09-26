import React from 'react';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import resume from '../../assets/resume.png';
import styles from './links.module.scss';

const Links = () => {
  const Pic = (props) => {
    return <img className={styles.linkAsset} src={props.asset} alt="" />;
  };

  const linkedinLink = (
    <a
      className={styles.link}
      rel="linkedin"
      href="https://www.linkedin.com/in/joshua-genereux-8292a8223/"
    >
      <div className={styles.name}>Linkedin</div>
      <Pic asset={linkedin} />
    </a>
  );

  const githubLink = (
    <a
      className={styles.link}
      rel="github"
      href="https://github.com/JoshGenereux"
    >
      <div className={styles.name}>Github</div>
      <Pic asset={github} />
    </a>
  );

  const ressumeLink = (
    <a
      className={styles.link}
      rel="github"
      href="https://docs.google.com/document/d/1PjXril9NWsKXJ5Crr-fJNhXNuUJ7ncNDkWOFmR2ejYs/edit?usp=sharing"
    >
      <div className={styles.name}>Resume</div>
      <Pic asset={resume} />
    </a>
  );

  return (
    <div className={styles.links}>
      {linkedinLink}
      {githubLink}
      {ressumeLink}
    </div>
  );
};

export default Links;
