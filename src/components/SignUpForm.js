import React from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";


const SignUpForm = () => {
  return (
    <>
      <h3>Sign Up.</h3>
      <Form >
        <FormGroup>
          <h5>Username</h5>
          <Input
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <h5>E-mail</h5>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <h5>Password</h5>
          <Input
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <h5></h5>
        </FormGroup>
        <Button className="mx-auto d-block" outline color="primary">
          Sign up
        </Button>
      </Form>
    </>
  )
};

export default SignUpForm;
