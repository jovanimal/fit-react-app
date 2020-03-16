import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styles from "./SignUpForm.module.css"

const SignUpForm = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleusername = e => {
    setusername(e.target.value);
  };

  const handleemail = e => {
    setemail(e.target.value);
  };

  const handlepassword = e => {
    setpassword(e.target.value);
  };

  let history = useHistory();

  const signup = (username, email, password) => {
    if (username && email && password) {
      axios({
        method: "POST",
        url: "https://fivehive.herokuapp.com/api/v1/users/new",
        data: {
          username: username,
          email: email,
          password: password
        }
      })
        .then(result => {
          console.log(result);
          history.push("/login");
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      console.log("some fields are missing");
    }
  };

  return (
    <>
      <h3>Sign Up.</h3>
      <Form>
        <FormGroup>
          <h5>Username</h5>
          <Input type="text" onChange={handleusername} />
        </FormGroup>
        <FormGroup>
          <h5>E-mail</h5>
          <Input type="email" onChange={handleemail} />
        </FormGroup>
        <FormGroup>
          <h5>Password</h5>
          <Input type="password" onChange={handlepassword} />
        </FormGroup>
        <FormGroup>
          <h5></h5>
        </FormGroup>
        <Button
          className="mx-auto d-block"
          outline
          color="primary"
          onClick={() => signup(username, email, password)}
        >
          Sign up
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
