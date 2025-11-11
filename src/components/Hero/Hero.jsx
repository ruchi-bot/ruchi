import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ruchi</h1>
        <p className={styles.description}>
        A creative Full Stack Developer who loves turning ideas into real, working apps. I work with technologies like React, Node.js, and more to build smooth, user-friendly web experiences.
        </p>
        <a href="mailto:ruchisaini2471@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Ruchi Saini, Full Stack Software Developer"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
