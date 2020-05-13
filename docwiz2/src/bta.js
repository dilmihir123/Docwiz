import React, { Component } from "react";
import "./App.css";
import alz from "./alzheimer.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class bta extends Component {
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
              <h1>Brain Tumor</h1>
              <p>
A brain tumor is a collection, or mass, of abnormal cells in your brain. Your skull, which encloses your brain, is very rigid. Any growth inside such a restricted space can cause problems. Brain tumors can be cancerous (malignant) or noncancerous (benign). When benign or malignant tumors grow, they can cause the pressure inside your skull to increase. This can cause brain damage, and it can be life-threatening.

Brain tumors are categorized as primary or secondary. A primary brain tumor originates in your brain. Many primary brain tumors are benign. A secondary brain tumor, also known as a metastatic brain tumor, occurs when cancer cells spread to your brain from another organ, such as your lung or breast.
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

export default bta;
