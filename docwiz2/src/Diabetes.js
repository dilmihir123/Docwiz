import React, { Component } from "react";
import "./App.css";
import diab from "./diabetes.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Diabetes extends Component {
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
                <Image src={diab} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Diabetes</h1>
              



              <p>
              Diabetes mellitus, commonly known as diabetes, is a
               metabolic disease that causes high blood sugar. The
                hormone insulin moves sugar from the blood into your 
                cells to be stored or used for energy. With diabetes, 
                your body either doesn’t make enough insulin or can’t 
                effectively use the insulin it does make.

Untreated high blood sugar from diabetes can damage your nerves, eyes, 
kidneys, and other organs.
                
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

export default Diabetes;
