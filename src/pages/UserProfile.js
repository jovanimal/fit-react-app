import React from "react";
import NavBar from "../components/NavBar";
import {
  Col,
  Button,
  Container,
  Row,
} from "reactstrap";
import Image from "react-graceful-image";
import defaultImage from "../assets/images/default-profile.png";
import styles from "./UserProfile.module.css";
/*
// below is the variable for "users" that we fetched from API
age: 
email: 
fitness_level:
height:
preferred_workouts: 
username: 
weight: 
years_of_training: 
*/

const UserProfile = ({ users }) => {
  return (
    <>
      <Container fluid={true} style={{ marginBottom: "70px", backgroundColor: "rgba(255,255,255,0.6)" }}>
        <Row style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
          <Button style={{ backgroundColor: "rgba(255,255,255,0.6)", border: "1px solid #fdbe83", color: "#f38c2c", width: "45%", height: "30px", borderRadius: "10px", padding: "0" }}>
            B U D D Y
          </Button>
          <Button style={{ backgroundColor: "rgba(255,255,255,0.6)", border: "1px solid #fdbe83", color: "#f38c2c", width: "45%", height: "30px", borderRadius: "10px", padding: "0" }}>
            M E N T O R
          </Button>
        </Row>
        {/* SAMPLE */}
        {/* <Row style={{ marginTop: "100px" }}>
          <div className={styles.picIcon}>
            <Image src={defaultImage} className={styles.profilePic} />
            <a className={styles.icon}><span className="hb hb-sm"><i class="fas fa-venus" style={{ color: "pink" }}></i></span></a>
          </div>
          <div className={styles.picIcon}>
            <Image src={defaultImage} className={styles.profilePic} />
            <a className={styles.icon}><span className="hb hb-sm"><i class="fas fa-mars" style={{ color: "lightblue" }}></i></span></a>
          </div>
        </Row> */}
        <Row>
          {users.map((user, index) => {
            return (
              <Col key={index} xs="6" md="4">
                <div className={styles.eachUser}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                  <div className={styles.line3}></div>
                  <div className={styles.line4}></div>
                  <div className={styles.picIcon}>
                    <Image src={defaultImage} className={styles.profilePic} />
                    <a className={styles.icon}><span className="hb hb-sm"><i class="fas fa-mars" style={{ color: "lightblue" }}></i></span></a>
                  </div>
                  <h4>{user.username}</h4>
                  <h6>{user.age}</h6>
                  <p>
                    {user.weight} kg, {user.height} cm
                  </p>
                  <hr />
                  <p>
                    <span className={styles.runningSpan}>running</span>
                    <span className={styles.pilatesSpan}>pilates</span>
                    <span className={styles.yogaSpan}>yoga</span>
                  </p>
                  {/* <p>
                    <span className={styles.weightSpan}>weight lifting</span>
                  </p> */}
                </div>
              </Col>
            );
          })
          }
        </Row>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
