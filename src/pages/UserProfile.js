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
// import Image from "react-graceful-image";

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
    <Container>
      <Row>
        {users.map(user => {
          return (
            <Card>
              <CardBody>
                <CardTitle>{user.username}</CardTitle>
                <CardSubtitle>{user.age}</CardSubtitle>
                <CardText>{user.height}</CardText>
              </CardBody>
            </Card>
          );
        })}
        <NavBar />
      </Row>
    </Container>
  );
};

export default UserProfile;
