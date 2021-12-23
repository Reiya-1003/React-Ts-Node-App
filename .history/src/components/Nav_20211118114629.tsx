import React from "react";
import styles from "../Styles.module.css";

const Nav = () => {
  return (
    <nav className="black">
      <span>aaa</span>
      <span>
        <span
          className=".nav-wrapper container"
          style={{ position: "absolute", left: 0 }}
        >
          <a href="" className="brand-logo">
            <span className="red-text text-accent-4">MOVIEFLIX</span>
          </a>
        </span>
      </span>
    </nav>
  );
};

export default Nav;