import React, { useState } from 'react';
import { Button, Container, Col, Row } from "reactstrap";
import { NavLink as Link } from "react-router-dom"
import styles from "./MentorForm.module.css";

const MentorForm = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    (
      <div className={styles.step1}>
        <h4>Why you should hire a fitness <br />mentor from our community:</h4>
        <Container fluid={true}>
          <Row>
            <Col xs="7" md="4">
              <div className={styles.reason} style={{ border: "2px solid #fdbe83" }}>
                <h6>
                  The <span>most</span><br /><span>affordable</span><br />price in town
              </h6>
                <hr />
                <p>we charge 30-40% less than a personal trainer would.</p>
              </div>
              <div className={styles.reason}>
                <h6>
                  <span>No more</span>inefficient exercise routines.
                </h6>
                <hr />
                <h6 style={{ marginTop: "10px", marginBottom: "20px" }}>
                  <span style={{ marginLeft: "-10px" }}>Maximise your time</span>through workouts/diets designed to <br />meet your goals quickly! ;)
              </h6>
              </div>
            </Col>
            <Col xs="5" md="4">
              <div className={styles.reason}>
                <h6>A<span>w i d e</span><span> range</span> of mentoring services</h6>
                <hr />
                <p>including sports activities, special needs training, etc.</p>
              </div>
              <div className={styles.reason} style={{ marginLeft: "-10px", paddingLeft: "5px" }}>
                <h6 style={{ margin: "10px auto" }}>Rest assured</h6>
                <hr />
                <h6 style={{ margin: "10px auto" }}>
                  Our<span style={{ padding: "0 5pxr" }}>Certified</span><br />mentors have at least 3 years of experience.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    ),
    (
      <div className={styles.step2}>
        <h4>What fitness goals would you <br />like to achieve?</h4>
        <label>
          Weight Gain/Loss
          <input type="checkbox" />
        </label>
        <label>
          Circuit/Functional Training
          <input type="checkbox" />
        </label>
        <label>
          Strength Training
          <input type="checkbox" />
        </label>
        <label>
          Aerobic Fitness
          <input type="checkbox" />
        </label>
        <label>
          Others:
          <input type="text" placeholder="please specify" />
        </label>
      </div>
    ),
    (
      <div className={styles.step1}>
        <h4>Do you have a gender <br />preference for your trainer?</h4>
        <label>
          <input type="checkbox" />
          Male
        </label>
        <label>
          <input type="checkbox" />
          Female
        </label>
        <label>
          <input type="checkbox" />
          No preference
        </label>
      </div>
    ),
    (
      <div className={styles.step2}>
        <h4>Do you prefer to train alone <br />or in a group?</h4>
        <label>
          <input type="checkbox" />
          Alone
        </label>
        <label>
          <input type="checkbox" />
          In a group
        </label>
      </div>
    ),
    (
      <div className={styles.step1}>
        <h4>How often would you like to train?</h4>
        <label>
          <input type="checkbox" />
          Daily
      </label>
        <label>
          <input type="checkbox" />
          3-4 times a week
      </label>
        <label>
          <input type="checkbox" />
          Less than 3 times a week
      </label>
        <label>
          <input type="checkbox" />
          I would like a recommendation
      </label>
      </div>
    ),
    (
      <div className={styles.step2}>
        <h4>Is there anything else you <br />would like us to know?</h4>
        <textarea rows="2" />
      </div>
    ),
    (
      <div className={styles.step1}>
        <h4>Ok great! <br />When would you like to start?</h4>
        <input type="date" />
      </div>
    ),
    (
      <div className={styles.step2}>
        <h4>We're almost done..</h4>
        <h4>Choose your preferred location:</h4>
      </div>
    )
  ];

  const buttonGroup = [
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          Let's get started!
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          next >
        </button>
      </div>
    ),
    (
      <div className={styles.nextPrevBtn}>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; previous
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentPage(currentPage + 1)}>
          All done!
        </button>
      </div>
    ),
  ]

  return (
    <div className={styles.fullPage}>
      <Button tag={Link} to="/login" style={{
        top: "20px", left: "20px", position: "absolute", borderRadius: "50%", height: "35px", width: "35px", fontSize: "2em", display: "flex",
        paddingTop: "23px",
        alignItems: "center", justifyContent: "center", backgroundColor: "#fdbe83", border: "none", color: "slategray"
      }}>
        <p>&lt;</p>
      </Button>
      <div className={styles.container}>
        {pages[currentPage]}
      </div>
      {buttonGroup[currentPage]}
    </div>
  )
}

export default MentorForm
