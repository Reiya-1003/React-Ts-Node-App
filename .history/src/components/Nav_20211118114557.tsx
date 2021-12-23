import React from "react";
import styles from "../Styles.module.css";

const Nav = () => {
  return (
    <nav className="black">
      <span>aaa</span>
      <span>
        <div
          className=".nav-wrapper container"
          style={{ position: "absolute", left: 0 }}
        >
          <a href="" className="brand-logo">
            <div className="red-text text-accent-4">MOVIEFLIX</div>
          </a>
        </div>
      </span>
    </nav>
  );
};

export default Nav;
