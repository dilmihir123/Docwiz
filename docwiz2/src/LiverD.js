import React, { Component } from "react";
import "./App.css";
import liver from "./liver.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class LiverD extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="liverA">
          <Container>
            <Row>
              <Col>
                <Image src={liver} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Liver Disease</h1>
              
              <p>
                Your liver is the largest organ inside your body. It helps your body digest food, store energy, and remove poisons.

There are many kinds of liver diseases:

Diseases caused by viruses, such as hepatitis A, hepatitis B, and hepatitis C
Diseases caused by drugs, poisons, or too much alcohol. Examples include fatty liver disease and cirrhosis.
Liver cancer
Inherited diseases, such as hemochromatosis and Wilson disease
Symptoms of liver disease can vary, but they often include swelling of the abdomen and legs, bruising easily, changes in the color of your stool and urine, and jaundice, or yellowing of the skin and eyes. Sometimes there are no symptoms. Tests such as imaging tests and liver function tests can check for liver damage and help to diagnose liver diseases.
              </p>
              
              <p>
                <Button
                  onClick={this.home.bind(this)}
                  variant="primary"
                  type="submit"
                >
                  Home Page
                </Button>
              </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default LiverD;
