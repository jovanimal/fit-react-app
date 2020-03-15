import React, { useState } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styles from "./SignUpForm.module.css"

const SignUpForm = () => {
  const [step2, setStep2] = useState(false)
  const [step3, setStep3] = useState(false)

  const toggleStep2 = () => setStep2(true)
  const toggleStep1 = () => setStep2(false)
  const toggleStep3 = () => setStep3(true)

  return (
    <>
      <div className={styles.fullPage}>
        <Button tag={Link} to="/login" style={{ position: "fixed", top: "10px", left: "10px", border: "none", borderRadius: "50%", backgroundColor: "#fdbe83", height: "35px", width: "35px", fontSize: "2em", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
          &lt;
        </Button>
        <h1>Sign Up</h1>
        <div className={styles.container}>
          {!step2 ? (
            <div className={styles.step1}>
              <Form >
                <FormGroup>
                  <h6 className={styles.h6}>Username</h6>
                  <input
                    type="text" className={styles.input}
                  />
                </FormGroup>
                <FormGroup>
                  <h6 className={styles.h6}>E-mail</h6>
                  <input type="email" className={styles.input} />
                </FormGroup>
                <FormGroup>
                  <h6 className={styles.h6}>Password</h6>
                  <input
                    type="password" className={styles.input}
                  />
                </FormGroup>
              </Form>
            </div>
          ) : (
              !step3 ? (
                <div className={styles.step2}>
                  <Form >
                    <FormGroup>
                      <h5>What is your fitness level?</h5>
                      <div class="slidecontainer">
                        <input type="range" min="0" max="10" value="5" className={styles.slider} id="myRange" />
                      </div>
                    </FormGroup>
                  </Form>
                </div>
              ) : (
                  <div className={styles.step1}>
                    <Form>
                      <h5>What are your preferred exercises?</h5>
                    </Form>
                  </div>
                )
            )
          }
        </div>
        {!step2 ? (
          <button className={`mx-auto d-block ${styles.nextBtn}`} onClick={toggleStep2}>
            next >>
          </button>
        ) : (
            !step3 ? (
              <div className={styles.nextPrevBtn}>
                <button className={styles.nextBtn} onClick={toggleStep1}>
                  &lt;&lt; previous
              </button>
                <button className={styles.nextBtn} onClick={toggleStep3}>
                  next >>
              </button>
              </div>
            ) : (
                <div className={styles.nextPrevBtn}>
                  <button className={styles.nextBtn} onClick={toggleStep2}>
                    &lt;&lt; previous
                  </button>
                  <button className={styles.nextBtn}>
                    sign me up!
                  </button>
                </div>
              )
          )
        }
      </div>
    </>
  )
};

export default SignUpForm;
