import React from "react";

import styles from "./about.module.css";
// import styles from "./hero.module.css";

// import { getImageUrl } from "../../utils";
// import animationphoto from "../assets/animation-photo.jpg";
import animationphoto from "../../assets/animationphoto.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={animationphoto}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="https://akashmanjhi.netlify.app/assets/cursorIcon-Cl-39jte.png"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="https://akashmanjhi.netlify.app/assets/serverIcon-WJZSWU7n.png"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in working with RESTful APIs, handling JSON
                data, and fetching information from servers using Fetch API and
                Axios.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="https://akashmanjhi.netlify.app/assets/uiIcon-zoQSjAxp.png"
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
