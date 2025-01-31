import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../assets/heroImage.png";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sunny Dhanwant</h1>
        <p className={styles.description}>
          I'm a frontend developer using JavaScript, React and Tailwind CSS.
          Reach out if you'd like to learn more!
        </p>
        <a
          href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy8xYzExMjhhMDVkODIxNTM2L0VUbW16V2JWbGcxR3VjeG9fcWZkQnNJQjBIenAtcnNTMDhxa3dYS0RlUXlLYWc&cid=1C1128A05D821536&id=1C1128A05D821536%21s66cda63996d5460db9cc68fea7dd06c2&parId=root&o=OneUp"
          target="_blank"
          className={styles.contactBtn}
        >
          Download Resume
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
