import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  CustomInput
} from "reactstrap";
import styles from "./MyProfilePage.module.css";
import Image from "react-graceful-image";
import profilePic from "../assets/images/calcifer.png";
import axios from "axios";

const MyProfilePage = ({ loggedUser, myinfo }) => {
  const [modal, setModal] = useState(false);
  const [fyle, setfyle] = useState(null);

  const toggle = () => setModal(!modal);

  const handlefile = e => {
    let targetFile = e.target.files[0];
    console.log(targetFile.name);
    setfyle(targetFile);
  };

  const uploadfile = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("media", fyle);
    axios({
      method: "POST",
      // change me
      url: `http://localhost:5000/api/v1/users/upload/${loggedUser}`,
      data: formData
    })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <Container fluid={true} className={styles.fullPage}>
        <Row>
          <div className={styles.username}>
            <span>{myinfo.username}</span>
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
              <button className={styles.editBtn} onClick={toggle}>
                >Upload media
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup className="w-50 mx-auto d-block">
                      <CustomInput
                        type="file"
                        id="exampleCustomFileBrowser"
                        name="customFile"
                        className="mt-4"
                        onChange={handlefile}
                      />
                    </FormGroup>
                    <Button
                      outline
                      color="primary"
                      type="submit"
                      onClick={e => {
                        uploadfile(e);
                      }}
                    >
                      Upload
                    </Button>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={uploadfile}>
                    Upload
                  </Button>{" "}
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
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
