import React from "react";
import NavBar from "../components/NavBar";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  CardSubtitle,
  CardText
} from "reactstrap";
import Image from "react-graceful-image";
import defaultImage from "../assets/images/default-profile.png"
import styles from "./UserProfile.module.css"

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
      <Container fluid={true} style={{ marginBottom: "70px" }}>
        <Row>
          {
            users.map((user, index) => {
              return (

                <Col key={index} xs="6" md="4">
                  <div style={{ border: "1px solid black", borderRadius: "10px", margin: '10px -5px' }}>
                    <Image src={defaultImage} className={styles.profilePic} />
                    <h4>
                      {user.username}
                    </h4>
                    <h6>
                      age
                  </h6>
                    <p>
                      weight kg, height cm
                  </p>
                    <p><span className={styles.runningSpan}>running</span><span className={styles.pilatesSpan}>pilates</span><span className={styles.yogaSpan}>yoga</span></p>
                    <p>
                      <span className={styles.weightSpan}>weight lifting</span>
                    </p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container >
      < NavBar />
    </>
  );
};


export default UserProfile;
