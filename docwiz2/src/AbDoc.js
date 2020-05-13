import React, { Component } from "react";
import "./App.css";
import h1 from "./185895.jpg";
import h2 from "./185899.jpg";
import h3 from "./186022.jpg";
import { Spring } from "react-spring/renderprops";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Navbar";
import { Jumbotron, Button, Carousel } from "react-bootstrap";

class AbDoc extends Component {
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
                    <h1>DocWiz</h1>
                    <p>
                     The main aim of the DocWiz application is to make 
                     the disease prediction more effective thereby 
                     helping the doctors as well as patients to have a 
                     better diagnosis. As it is a Machine Learning based 
                     plication and as it uses appropriate algorithms for 
                     respective diseases it gives an accuracy of 80-90% in 
                     the prediction and it has has an efficiency of about 90%. 
                     is will surely help in the reduction of deaths due to wrong 
                     diagnosis of diseases.

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
export default AbDoc;
