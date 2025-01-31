import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title}>Portfolio</a>
      <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <RxCross1 className={styles.menuBtn} />
        ) : (
          <HiMenu className={styles.menuBtn} />
        )}

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            {/* <a href="/">Home</a> */}
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a>
              <Link to={"/about"}>About</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/skill"}>Skills & Education</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Projects"}>Projects</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/Contact"}>Contact</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
