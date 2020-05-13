import React, { Component } from "react";
import "./App.css";
import lwback from "./lwback.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Lowerback extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="lB">
          <Container>
            <Row>
              <Col>
                <Image src={lwback} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Lowerback Disease</h1>
              
              <p>
                Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.
Common causes of this symptom
Back pain can have causes that aren't due to underlying disease. Examples include overuse such as working out or lifting too much, prolonged sitting and lying down, sleeping in an uncomfortable position or wearing a poorly fitting backpack.
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

export default Lowerback;
