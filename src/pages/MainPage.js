import React from "react";
import styles from "./MainPage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap"
import Hive from "../assets/images/5-hive.png"
import Image from "react-graceful-image"

const MainPage = () => {
  return (
    <>
      <div className={styles.containerTop}>
        <div className={styles.buddyAnimate}>
          <a className={styles.buddyBtn} href="#">
            <span className="hb hb-md">
              BUDDY
          </span>
          </a>
        </div>
        <div className={styles.mentorAnimate}>
          <a className={styles.mentorBtn} href="#">
            <span className="hb hb-md">
              MENTOR
          </span>
          </a>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <Button className={styles.logo} tag={Link} to="/">
          {/* <p style={{ color: "white", fontSize: "1em" }}>LOGO</p> */}
          <Image src={Hive} className={styles.logo} />
        </Button>
      </div>
    </>
  )
};

export default MainPage;
