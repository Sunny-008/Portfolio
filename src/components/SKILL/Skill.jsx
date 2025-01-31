import React from "react";
import styles from "./Skill.module.css";

const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>SKILLS AND EDUCATION</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="data:image/png;base64,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"
                alt="image html"
              />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="https://www.coywolf.news/wp-content/uploads/2024/11/purple-css-logo.webp"
                alt="image html"
              />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="https://akashmanjhi.netlify.app/assets/javascript-Q4_6xclj.png"
                alt="image html"
              />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="https://akashmanjhi.netlify.app/assets/react-5xuTXm4N.png"
                alt="image html"
              />
            </div>
            <p>React JS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="https://akashmanjhi.netlify.app/assets/tailwind-dbZ4cIwZ.png"
                alt="image html"
              />
            </div>
            <p>Tailwind CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                alt="image html"
              />
            </div>
            <p>Git Hub</p>
          </div>
        </div>

        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img
              src="https://mdu.ac.in/Imgs/logo%20colored%20transparent244x221.png"
              alt="logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>MAHARSHI DAYANAND UNIVERSITY</h3>
              <p>MCA First Year</p>
              <ul>
                <li>July, 2024-Present</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img
              src="https://mdu.ac.in/Imgs/logo%20colored%20transparent244x221.png"
              alt="logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>MAHARSHI DAYANAND UNIVERSITY</h3>
              <p>BCA</p>
              <ul>
                <li>July, 2021-2024</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img
              src="https://akashmanjhi.netlify.app/assets/bseh-n7Sqq6pU.png"
              alt="logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>Govt Sr Sec School</h3>
              <p>Class 12th</p>
              <ul>
                <li>Apr 2020, June 2021</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
