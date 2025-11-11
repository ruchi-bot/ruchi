import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../Assets/contact/emailIcon.png";
import linkedinIcon from "../../Assets/contact/linkedinicon.png";
import githubIcon from "../../Assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:ruchisaini2471@gmail.com">ruchisaini2471@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
           <a href="https://www.linkedin.com/in/ruchi-saini-932431262/">https://www.linkedin.com/in/ruchi-saini-932431262/</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" />
          <a href="https://github.com/ruchi-bot">https://github.com/ruchi-bot</a>
        </li>
      </ul>
    </footer>
  );
};