import React, { Component } from "react";
import "./App.css";
import alz from "./alzheimer.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Alzheimer extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="heart">
          <Container>
            <Row>
              <Col>
                <Image src={alz} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Alzheimer's</h1>
              <p>
Alzheimer's disease is a progressive disorder that causes brain cells to
waste away (degenerate) and die. Alzheimer's disease is the most common 
ause of dementia — a continuous decline in thinking, behavioral and 
social skills that disrupts a person's ability to function independently.
The early signs of the disease may be forgetting recent events or
 conversations. As the disease progresses, a person with Alzheimer's
  disease will develop severe memory impairment and lose the ability
   to carry out everyday tasks.
Current Alzheimer's disease medications may temporarily improve symptoms 
 slow the rate of decline. These treatments can sometimes help people 
 with Alzheimer's disease maximize function and maintain independence 
 for a time. Different programs and services can help support people
  with Alzheimer's disease and their caregivers.
              </p>
                <Button
                  onClick={this.home.bind(this)}
                  variant="primary"
                  type="submit"
                >
                  Home Page
                </Button>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Alzheimer;
