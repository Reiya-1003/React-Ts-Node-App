import React from "react";
import styles from "../Styles.module.css";

const Nav = () => {
  return (
    <nav className="black">
      <div className=".nav-wrapper container"+ {styles.boxnav}>
        <a href="" className="brand-logo">
          <div className="red-text text-accent-4">MOVIEFLIX</div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
