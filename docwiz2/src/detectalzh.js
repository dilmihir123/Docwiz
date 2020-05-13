import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import PersistentDrawerLeft from "./SideNav";
class DetectAlzh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: "",
      Educ: "",
      SES: "",
      MMSE: "",
      CDR: "",
      eTIV: "",
      nWBV: "",
      ASF: ""
    };
  }

  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/alzh";
    return axios.post(dataurl, data);
  }
  Detectalzh = e => {
    e.preventDefault();
    debugger;
    alert("ok");
    let obj = {
      Age: this.state.Age,
      Educ: this.state.Educ,
      SES: this.state.SES,
      MMSE: this.state.MMSE,
      CDR: this.state.CDR,
      eTIV: this.state.eTIV,
      nWBV: this.state.nWBV,
      ASF: this.state.ASF
    };
    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        alert("Yes");
        this.props.history.push("/mapalzh");
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Fit">
        <PersistentDrawerLeft />
        <br></br>
        <h1 className="heading">Detect Alzheimers</h1>
        <div className="Signup">
          <Form>
            <Form.Group className="" controlId="Age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                name="Age"
                onChange={this.handleChange}
                value={this.state.Age}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Age of the person</Form.Text>
            </Form.Group>

            <Form.Group controlId="Educ">
              <Form.Label>Educ:</Form.Label>
              <Form.Control
                name="Educ"
                onChange={this.handleChange}
                value={this.state.Educ}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Education Level</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="SES">
              <Form.Label>SES:</Form.Label>
              <Form.Control
                name="SES"
                onChange={this.handleChange}
                value={this.state.SES}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Socioeconomic Status</Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="MMSE">
              <Form.Label>MMSE:</Form.Label>
              <Form.Control
                name="MMSE"
                onChange={this.handleChange}
                value={this.state.MMSE}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Mini Mental State Examination
              </Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="CDR">
              <Form.Label>CDR:</Form.Label>
              <Form.Control
                name="CDR"
                onChange={this.handleChange}
                value={this.state.CDR}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Clinical Dementia Rating
              </Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="eTIV">
              <Form.Label>eTIV:</Form.Label>
              <Form.Control
                name="eTIV"
                onChange={this.handleChange}
                value={this.state.eTIV}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Estimated Total Intracranial Volume
              </Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="nWBV">
              <Form.Label>nWBV:</Form.Label>
              <Form.Control
                name="nWBV"
                onChange={this.handleChange}
                value={this.state.nWBV}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Normalize Whole Brain Volume
              </Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="ASF">
              <Form.Label>ASF:</Form.Label>
              <Form.Control
                name="ASF"
                onChange={this.handleChange}
                value={this.state.ASF}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Normalize Whole Brain Volume
              </Form.Text>
            </Form.Group>

            <FormGroup>
              <Button
                onClick={this.Detectalzh.bind(this)}
                variant="primary"
                type="submit"
              >
                Detect
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default DetectAlzh;
