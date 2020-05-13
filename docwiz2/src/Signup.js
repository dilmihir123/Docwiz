import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Navbar,Navba } from 'react-bootstrap';
import Navigator from "./Navbar";
import {
  Button,
  Form,
  FormGroup,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

class SignUp extends Component {
  submit() {
    let path = "/Login";
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Navigator />
        <div className="Fit">
          <br></br>
          <h1 className="heading">Sign Up</h1>
          <div className="Signup">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter First Name" />
                <Form.Text className="text-muted"></Form.Text>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Last Name" />
                <Form.Label>User Name</Form.Label>
                <Form.Control type="name" placeholder="Enter User Name" />
              </Form.Group>

              <Form.Group controlId="name"></Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  Gender
                  <pre>{"  "}</pre>
                  <ToggleButton value={1}>Male</ToggleButton>
                  <ToggleButton value={2}>Female</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
              <br></br>

              <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="password" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re enter Password" />
              </Form.Group>

              <FormGroup>
                <Button
                        onClick={this.submit.bind(this)}
                        variant="primary"
                        type="submit"
                      >
                      Sign Up
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
