import React, { Component } from "react";
import "./App.css";
import h1 from "./185895.jpg";
import h2 from "./185899.jpg";
import h3 from "./186022.jpg";
import { Spring } from "react-spring/renderprops";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Navbar";
import { Jumbotron, Button, Carousel } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navigator />
        <div className="Sam">
          <div className="About">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={h1} alt="First slide" />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={h2} alt="Third slide" />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={h3} alt="Third slide" />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={{ delay: 3000, duration: 3000 }}
            >
              {props => (
                <div className={props}>
                  <Jumbotron>
                    <h1>About Us</h1>
                    <p>
                     There is a major problem in medical field that now the people are treated
for their diseases without the doctors having a full knowledge of the disease due
to the vast presence of data. This sometimes leads to wrong identification of
diseases and thereby wrong treatments.
Our basic idea is to train the system based on the existing dataset and find
the probability of the disease of the patient based on the symptoms given by the
doctor to help them give a better and faster treatment procedure. 
Through this system the doctors will get informed about the new type of
diseases. So that it will help the doctors to provide proper treatment without
having an oscillation between the diseases.
                    </p>
                  </Jumbotron>
                </div>
              )}
            </Spring>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
