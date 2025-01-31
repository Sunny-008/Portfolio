import React from "react";
import Ecommerce from "../../assets/E-commerce.png";

import EMS from "../../assets/EMS.png";
import UI from "../../assets/CloneUi.png";
import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

export const ProjectCard = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={Ecommerce} alt="E-commerce" className={styles.image} />
        <h3 className={styles.title}>E-commerce web site</h3>
        <p className={styles.description}>
          This is a project made to learn the latest languages by building an
          app.
        </p>
        <ul className={styles.skills}>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>React js</li>
          <li className={styles.skill}>Tailwind CSS</li>
          <li className={styles.skill}>Redux</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://e-markitngproject.netlify.app"
            target="_blank"
            className={styles.link}
          >
            Demo
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img
          src={EMS}
          alt="Employee Management System"
          className={styles.image}
        />
        <h3 className={styles.title}>Employee Management System web site</h3>
        <p className={styles.description}>
          This is a project made to learn the latest languages by building an
          app.
        </p>
        <ul className={styles.skills}>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>React js</li>
          <li className={styles.skill}>Tailwind CSS</li>
          <li className={styles.skill}>Context API</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://employeemanangementsystem.netlify.app"
            target="_blank"
            className={styles.link}
          >
            Demo
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={UI} alt="Lazarev.Agency" className={styles.image} />
        <h3 className={styles.title}>Lazarev.Agency UI Clone web site</h3>
        <p className={styles.description}>
          This is a project made to learn the latest languages by building an
          app.
        </p>
        <ul className={styles.skills}>
          <li className={styles.skill}>HTML</li>
          <li className={styles.skill}>CSS</li>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>GSAP</li>
        </ul>
        <div className={styles.links}>
          <a
            href="https://sunny-008.github.io/Lazerev-Project1/"
            target="_blank"
            className={styles.link}
          >
            Demo
          </a>
        </div>
      </div>
    </>
  );
};
