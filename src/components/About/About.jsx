import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          //src={getImageUrl("about/aboutImage.png")}
          //alt="Me sitting with a laptop"
          src="/Assets/about/aboutImage.png" 
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img //src={getImageUrl("about/cursorIcon.png")} //alt="Cursor icon" 
            src="/Assets/about/cursorIcon.png"
            alt="Cursor icon" 
            />
            <div className={styles.aboutItemText}>
              
              <p>
              I'm a developer who enjoys designing and building web applications. My main focus is crafting smooth frontend experiences with React while also developing efficient backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img //src={getImageUrl("about/serverIcon.png")} //alt="Server icon" 
            // 
            src="/Assets/about/serverIcon.png"
            alt="Server icon"/>
            <div className={styles.aboutItemText}>
              
              <p>
                I Love Learning new technologies and working on projects that challenge me to grow my skills.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};