import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";

import styles from "../Styles.module.css";

const Nav = () => {
  return (
    <nav className="black">
      <span>
        <span
          className=".nav-wrapper container"
          style={{ position: "absolute", left: 40 }}
        >
          <a href="http://localhost:3000/" className="brand-logo">
            <div className="red-text text-accent-4">MOVIEFLIX</div>
          </a>
        </span>
        <span>
          <Link
            to={`/detail/${list.id}`}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            favolist
          </Link>
        </span>
      </span>
    </nav>
  );
};

export default Nav;
