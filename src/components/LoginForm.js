import React from "react";
import styles from "./LoginForm.module.css"
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import Hive from "../assets/images/5-hive.png"
import Image from "react-graceful-image"

const LoginForm = () => {
  return (
    <>
      <div className={styles.containerTop}>
        <div>
          <Image src={Hive} className={styles.logo} />
          {/* <p style={{ color: "white", fontSize: "2em" }}>LOGO</p> */}
        </div>
        <div className={styles.form}>
          <h4 className={styles.h4}>Log In</h4>
          <Form >
            <FormGroup>
              <h6 className={styles.h6}>Username</h6>
              <input
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <h6 className={styles.h6}>Password</h6>
              <input
                type="password"
              />
            </FormGroup>
            <button className={styles.loginBtn}>
              log in
          </button>
          </Form>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <h5 style={{ marginTop: "-20px", marginBottom: "-1px" }}>New User?</h5>
        <p>Sign up as:</p>
        <div className={styles.buttons}>
          <Button tag={Link} to="/signup" style={{ backgroundColor: "transparent", padding: "0", border: "transparent" }}>
            <a className={styles.userBtn}>
              <span className="hb hb-sm">
                USER
              </span>
            </a>
          </Button>
          <span className={styles.span}>OR</span>
          <a className={styles.mentorBtn} href="#">
            <span className="hb hb-sm">
              MENTOR
          </span>
          </a>
        </div>
      </div>
    </>
  )
};

export default LoginForm;
