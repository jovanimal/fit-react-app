import React from "react";
import styles from "./NavBar.module.css";
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.grid}>
        <Button tag={Link} to="/nearby" className="active">
          <i class="fas fa-street-view"></i>
          <br />
          Nearby
        </Button>
      </div>
      <div className={styles.grid}>
        <a href="#match">
          <i class="fas fa-user-friends"></i>
          <br />
          Match
        </a>
      </div>
      <div className={styles.grid}>
        <Button tag={Link} to="/challenges">
          <i class="fas fa-dumbbell"></i>
          <br />
          FIT
        </Button>
      </div>
      <div className={styles.grid}>
        <Button tag={Link} to="/chat">
          <i class="fas fa-comments"></i>
          <br />
          Chat
        </Button>
      </div>
      <div className={styles.grid}>
        <Button tag={Link} to="/myprofile">
          <i class="fas fa-user"></i>
          <br />
          Profile
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
