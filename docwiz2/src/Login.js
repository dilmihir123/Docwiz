import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Navbar";
import { Spring } from "react-spring/renderprops";
import { Button, Form, FormGroup } from "react-bootstrap";

class Login extends Component {
  signup() {
    let path = "/Signup";
    this.props.history.push(path);
  }

  submit() {
    let path = "/UserDash";
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="Fit">
        <Navigator />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={{ delay: 3000, duration: 3000 }}
        >
          {props => (
            <div className={props}>
              <div className="heading1">
                <h1>Login</h1>
              </div>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={{ delay: 5000, duration: 5000 }}
        >
          {props => (
            <div className={props}>
              <div className="Login">
                <Form id="myForm">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="password"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <FormGroup>
                    <pre>
                      <Button
                        onClick={this.submit.bind(this)}
                        variant="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                      {"    "}
                      <Button
                        onClick={this.signup.bind(this)}
                        variant="secondary"
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </pre>
                  </FormGroup>
                </Form>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
export default Login;
