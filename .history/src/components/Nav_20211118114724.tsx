import React from "react";
import styles from "../Styles.module.css";

const Nav = () => {
  return (
    <nav className="black">
      <span>
        <span
          className=".nav-wrapper container"
          style={{ position: "absolute", left: 40 }}
        >
          <a href="" className="brand-logo">
            <div className="red-text text-accent-4">MOVIEFLIX</div>
          </a>
        </span>
      </span>
    </nav>
  );
};

export default Nav;
