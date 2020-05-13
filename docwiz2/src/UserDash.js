import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersistentDrawerLeft from "./SideNav";
import { Button, Col, Form, FormGroup } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

class Dash extends Component {
  submit() {
    let path = "/detecth";
    this.props.history.push(path);
  }

  diabetesdet() {
    let path = "/detectdiab";
    this.props.history.push(path);
  }

  lowerd() {
    let path = "/detectlower";
    this.props.history.push(path);
  }

  heart() {
    let path = "/Heart";
    this.props.history.push(path);
  }

  alzheimer() {
    let path = "/Alzheimer";
    this.props.history.push(path);
  }

  alzheimerd() {
    let path = "/detectalzh";
    this.props.history.push(path);
  }

  btd() {
    let path = "/braintumourdet";
    this.props.history.push(path);
  }


  bta() {
    let path = "/BrainTA";
    this.props.history.push(path);
  }  

  liver() {}
  pneumonia() {
    let path = "/Pneumonia";
    this.props.history.push(path);
  }

  diabetes() {
    let path = "/Diabetes";
    this.props.history.push(path);
  }

  mald() {
    let path = "/malariadet";
    this.props.history.push(path);
  }

  pneumoniad() {
    let path = "/pneumoniadet";
    this.props.history.push(path);
  }

 

  card() {
    let path = "/detectcardio";
    this.props.history.push(path);
  }

  liverd() {
    let path = "/detectliver";
    this.props.history.push(path);
  }

  CardD() {
    let path = "/CardD";
    this.props.history.push(path);
  }

  Lowerback() {
    let path = "/Lowerback";
    this.props.history.push(path);
  }

  MalariaA() {
    let path = "/MalariaA";
    this.props.history.push(path);
  }

  LiverD() {
    let path = "/LiverD";
    this.props.history.push(path);
  }

  
  render() {
    return (
      <div>
        <PersistentDrawerLeft />
        <div className="Total">
          <Container>
            <div className="Fit">
              <Row>
                <div className="heading1"></div>
                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Heart Disorder">
                        <h2>HeartDisorder</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.submit.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <pre>{"        "}</pre>

                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Alzheimers">
                        <h2>Alzheimers</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.alzheimerd.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <pre>{"        "}</pre>
                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="bt">
                        <h2>Brain Tumor</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.btd.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <pre>{"        "}</pre>
                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Malaria">
                        <h2>Malaria</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.mald.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>

              <br></br>
              <Row>
                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Diabetes">
                        <h2>Diabetes</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.diabetesdet.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <pre>{"        "}</pre>

                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="liver">
                        <h2>Liver Disease</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.liverd.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            

                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <pre>{"        "}</pre>
                {/* <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Breastc">
                        <h2>Breast Cancer</h2>
                        <FormGroup>
                          <pre>
                            <Button variant="primary" type="submit">
                              Detect
                            </Button>
                            {"    "}
                            <Button
                              onClick={this.dy.bind(this)}
                              variant="secondary"
                              type="submit"
                            >
                              About
                            </Button>
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col> */}
                {/* </Row>
              <br></br>
              <Row> */}
                {/* <Row></Row> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Cardiovascular">
                        <h2>Cardiovascular</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.card.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            

                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>

                <br />

                {/* <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Skin Cancer">
                        <h2>Skin Cancer</h2>
                        <FormGroup>
                          <pre>
                            <Button variant="primary" type="submit">
                              Detect
                            </Button>
                            {"    "}
                            <Button
                              onClick={this.dy.bind(this)}
                              variant="secondary"
                              type="submit"
                            >
                              About
                            </Button>
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col> */}
                <Col>
                  <div className="Disease1">
                    <Form>
                      <Form.Group controlId="Lower Back">
                        <h2>Lower back problems</h2>
                        <FormGroup>
                          <pre>
                            <Button
                              onClick={this.lowerd.bind(this)}
                              variant="primary"
                              type="submit"
                            >
                              Detect
                            </Button>
                            
                          </pre>
                        </FormGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default Dash;
