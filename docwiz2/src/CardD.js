import React, { Component } from "react";
import "./App.css";
import cardDi from "./cardDi.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Col, Image } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class CardD extends Component {
  home() {
    let path = "./UserDash";
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="m">
        <div className="cardDa">
          <Container>
            <Row>
              <Col>
                <Image src={cardDi} rounded fluid />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="card">
          <Jumbotron fluid>
            <Container>
              <h1>Cardiovascular Disease</h1>
              
              <p>
               A heart attack occurs when the blood flow to a part of the heart is blocked by a blood clot. If this clot cuts off the blood flow completely, the part of the heart muscle supplied by that artery begins to die.

Most people survive their first heart attack and return to their normal lives, enjoying many more years of productive activity. But experiencing a heart attack does mean that you need to make some changes.

The medications and lifestyle changes that your doctor recommends may vary according to how badly your heart was damaged, and to what degree of heart disease caused the heart attack.


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

export default CardD;
