import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { NavLink as Link, useHistory } from "react-router-dom";
import Hive from "../assets/images/5-hive.png";
import Image from "react-graceful-image";
import axios from "axios";

const LoginForm = ({
  setisloggedin,
  isloggedin,
  usernameInput,
  setusernameInput,
  passwordInput,
  setpasswordInput,
  handleUser,
  handlePassword,
  submitlog
}) => {
  return (
    <>
      <div className={styles.containerTop}>
        <div>
          <Image src={Hive} className={styles.logo} />
          {/* <p style={{ color: "white", fontSize: "2em" }}>LOGO</p> */}
        </div>
        <h3>Log In.</h3>
        <Form>
          <FormGroup>
            <h5>Username</h5>
            <Input type="text" onChange={handleUser} />
          </FormGroup>
          <FormGroup>
            <h5>Password</h5>
            <Input type="password" onChange={handlePassword} />
          </FormGroup>
          <Button className={styles.loginBtn} onClick={submitlog}>
            log in
          </Button>
        </Form>
      </div>
      <div className={styles.containerBottom}>
        <h4 style={{ marginTop: "-20px", marginBottom: "-5px" }}>New User?</h4>
        <p>Sign up as:</p>
        <div className={styles.buttons}>
          <Button tag={Link} to="/signup">
            <a className={styles.userBtn}>
              <span className="hb hb-sm">USER</span>
            </a>
          </Button>
          <span className={styles.span}>OR</span>
          <a className={styles.mentorBtn} href="#">
            <span className="hb hb-sm">MENTOR</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
