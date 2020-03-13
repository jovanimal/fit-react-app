import React from "react";
import styles from "./HomePage.module.css"
import { NavLink as Link } from "react-router-dom";
import { Button } from "reactstrap";
import Image from "react-graceful-image"
import Hive from '../assets/images/5-hive.png'

const HomePage = () => {
  return (
    <>
      <Button className={styles.containerTop} tag={Link} to="/login">
        <Image src={Hive} className={styles.logo} />
      </Button>
      {/* <div className="containerBottom">
        <div className={styles.button}>
          <Button tag={Link} to="/login">
            <a>
              <span className="hb hb-md">
                LET'S GET STARTED
          </span>
            </a>
          </Button>
        </div>
      </div> */}
    </>
  )
};

export default HomePage;
