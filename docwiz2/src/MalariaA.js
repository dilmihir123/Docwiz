import React, { Component } from "react";
import "./App.css";
import Mal from "./Mal.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class MalariaA extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="malar">
          <Container>
            <Row>
              <Col>
                <Image src={Mal} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Malaria</h1>
              
              <p>
                A disease caused by a plasmodium parasite, transmitted by the bite of infected mosquitoes.
The severity of malaria varies based on the species of plasmodium.
Symptoms are chills, fever and sweating, usually occurring a few weeks after being bitten.
People travelling to areas where malaria is common typically take protective drugs before, during and after their trip. Treatment includes antimalarial drugs.
              </p>
              <br />
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

export default MalariaA;
