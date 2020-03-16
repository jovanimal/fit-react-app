import React from "react";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "reactstrap"
import styles from "./MyProfilePage.module.css"
import Image from "react-graceful-image"
import profilePic from "../assets/images/calcifer.png"

const MyProfilePage = () => {
  return (
    <>
      <Container fluid={true} className={styles.fullPage}>
        <Row>
          <div className={styles.username}>
            <span>Melissa1311</span>
          </div>
        </Row>
        <Row className={styles.userInfo}>
          <Col xs="4">
            <Image src={profilePic} className={styles.profilePic} />
          </Col>
          <Col xs="8" className={styles.column}>
            <Row>
              <Col xs="4">
                <h4>123</h4>
                <p>posts</p>
              </Col>
              <Col xs="4">
                <h4>123</h4>
                <p>followers</p>
              </Col>
              <Col xs="4">
                <h4>123</h4>
                <p>following</p>
              </Col>
            </Row>
            <Row>
              <button className={styles.editBtn}>edit your profile</button>
            </Row>
          </Col>
        </Row>
        <Row className={styles.container}>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
          <div className={styles.post}></div>
          <div className={styles.end}>. . .</div>
        </Row>
      </Container>
      <NavBar />
    </>
  );
};

// age
// fitness level
// years of training
// preferred workouts
// weight
// height

export default MyProfilePage;
