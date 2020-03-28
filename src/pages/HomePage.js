import React from "react";
import styles from "./HomePage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";
import Image from "react-graceful-image"
import Hive from '../assets/images/5-hive.png'

const HomePage = () => {
  return (
    <div className="page">
      <Button
        className={styles.fullPageButton}
        tag={Link}
        to="/login"
      >
        <Image src={Hive} className={styles.logo} />
        <div className={styles.circle}>
        </div>
        <p className={styles.tapHere}>Tap to start</p>
      </Button>
    </div>
  )
};

export default HomePage;
