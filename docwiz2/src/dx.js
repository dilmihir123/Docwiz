import React, { Component } from "react";
import "./App.css";
import disx from "./cardiac-ailment.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Dx extends Component {
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
                <Image src={disx} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Disease X</h1>

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

export default Dx;
