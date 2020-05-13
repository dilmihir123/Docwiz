import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import { CustomizedDialogs } from "./Dialog";
import PersistentDrawerLeft from "./SideNav";

class detectdiab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pregnancies: "",
      Glucose: "",
      BloodPressure: "",
      SkinThickness: "",
      Insulin: "",
      BMI: "",
      DiabetesPedigreeFunction: "",
      Age: ""
    };
  }
  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/hear";
    return axios.post(dataurl, data);
  }

  Detectdiab = e => {
    e.preventDefault();
    debugger;
    alert("ok");
    let obj = {
      Pregnancies: this.state.Pregnancies,
      Glucose: this.state.Glucose,
      BloodPressure: this.state.BloodPressure,
      SkinThickness: this.state.SkinThickness,
      Insulin: this.state.Insulin,
      BMI: this.state.BMI,
      DiabetesPedigreeFunction: this.state.DiabetesPedigreeFunction,
      Age: this.state.Age
    };

    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      // this.props.history.push("/UserDash");
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        alert("Yes");
        this.props.history.push("/mapdiab");
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <PersistentDrawerLeft />
        <div className="Fit">
          <br></br>
          <h1 className="heading">Detect Diabetes</h1>
          <div className="Signup">
            <Form>
              <Form.Group controlId="Pregnancies">
                <Form.Label>Pregnancies:</Form.Label>
                <Form.Control
                  // onChange={this.handleChange}
                  name="Pregnancies"
                  value={this.state.Pregnancies}
                  onChange={this.handleChange}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Number of times pregnant
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="Glucose">
                <Form.Label>Glucose:</Form.Label>
                <Form.Control
                  name="Glucose"
                  onChange={this.handleChange}
                  value={this.state.Glucose}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Plasma glucose concentration a 2 hours in an oral glucose
                  tolerance test
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="BloodPressure">
                <Form.Label>BloodPressure:</Form.Label>
                <Form.Control
                  name="BloodPressure"
                  onChange={this.handleChange}
                  value={this.state.BloodPressure}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Diastolic blood pressure (mm Hg)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="SkinThickness">
                <Form.Label>SkinThickness:</Form.Label>
                <Form.Control
                  name="SkinThickness"
                  onChange={this.handleChange}
                  value={this.state.SkinThickness}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Diastolic blood pressure (mm Hg)
                </Form.Text>
              </Form.Group>
              <Form.Group className="" controlId="Insulin">
                <Form.Label>Insulin:</Form.Label>
                <Form.Control
                  name="Insulin"
                  onChange={this.handleChange}
                  value={this.state.Insulin}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  2-Hour serum insulin (mu U/ml)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="BMI">
                <Form.Label>BMI:</Form.Label>
                <Form.Control
                  name="BMI"
                  onChange={this.handleChange}
                  value={this.state.BMI}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Body mass index (weight in kg/(height in m)^2)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="DiabetesPedigreeFunction">
                <Form.Label>DiabetesPedigreeFunction:</Form.Label>
                <Form.Control
                  name="DiabetesPedigreeFunction"
                  onChange={this.handleChange}
                  value={this.state.DiabetesPedigreeFunction}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Diabetes pedigree function
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="Age">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  name="Age"
                  onChange={this.handleChange}
                  value={this.state.Age}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">Age (years)</Form.Text>
              </Form.Group>

              <FormGroup>
                <Button
                  onClick={this.Detectdiab.bind(this)}
                  variant="primary"
                  type="submit"
                >
                  Detect
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default detectdiab;
