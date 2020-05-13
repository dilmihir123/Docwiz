import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import PersistentDrawerLeft from "./SideNav";
class DetectLowerBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Col1: "",
      Col2: "",
      Col3: "",
      Col4: "",
      Col5: "",
      Col6: "",
      Col7: "",
      Col8: "",
      Col9: "",
      Col10: "",
      Col11: "",
      Col12: ""
    };
  }

  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/lbp";
    return axios.post(dataurl, data);
  }

  Detectlower = e => {
    e.preventDefault();
    let obj = {
      Col1: this.state.Col1,
      Col2: this.state.Col2,
      Col3: this.state.Col3,
      Col4: this.state.Col4,
      Col5: this.state.Col5,
      Col6: this.state.Col6,
      Col7: this.state.Col7,
      Col8: this.state.Col8,
      Col9: this.state.Col9,
      Col10: this.state.Col10,
      Col11: this.state.Col11,
      Col12: this.state.Col12
    };
    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        alert("Yes");
        this.props.history.push("/maplower");
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
        <h1 className="heading">Detect Lower Back problem</h1>
        <div className="Signup">
          <Form>
            <Form.Group className="" controlId="Col1">
              <Form.Label>Pelvic Incidence:</Form.Label>
              <Form.Control
                name="Col1"
                onChange={this.handleChange}
                value={this.state.Col1}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Col2">
              <Form.Label>Pelvic Tilt:</Form.Label>
              <Form.Control
                name="Col2"
                onChange={this.handleChange}
                value={this.state.Col2}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="Col3">
              <Form.Label>Lumbar Lordosis Angle:</Form.Label>
              <Form.Control
                name="Col3"
                onChange={this.handleChange}
                value={this.state.Col3}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Col4">
              <Form.Label>Sacral Scope:</Form.Label>
              <Form.Control
                name="Col4"
                onChange={this.handleChange}
                value={this.state.Col4}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="Col5">
              <Form.Label>Pelvic Radius:</Form.Label>
              <Form.Control
                name="Col5"
                onChange={this.handleChange}
                value={this.state.Col5}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="Col6">
              <Form.Label>Degree Spondylolisthesis:</Form.Label>
              <Form.Control
                name="Col6"
                value={this.state.Col6}
                onChange={this.handleChange}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="Col7">
              <Form.Label>Pelvic Scope:</Form.Label>
              <Form.Control
                name="Col7"
                onChange={this.handleChange}
                value={this.state.Col7}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="Col8">
              <Form.Label>Direct Tilt:</Form.Label>
              <Form.Control
                name="Col8"
                onChange={this.handleChange}
                value={this.state.Col8}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Col9">
              <Form.Label>Thoracic Slope:</Form.Label>
              <Form.Control
                name="Col9"
                onChange={this.handleChange}
                value={this.state.Col9}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="Col10">
              <Form.Label>Cervical Tilt:</Form.Label>
              <Form.Control
                name="Col10"
                onChange={this.handleChange}
                value={this.state.Col10}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Col11">
              <Form.Label>Sarcum Angle:</Form.Label>
              <Form.Control
                name="Col11"
                onChange={this.handleChange}
                value={this.state.Col11}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Col12">
              <Form.Label>Scoliosis Slope:</Form.Label>
              <Form.Control
                name="Col12"
                onChange={this.handleChange}
                value={this.state.Col12}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <FormGroup>
              <Button
                onClick={this.Detectlower.bind(this)}
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
export default DetectLowerBack;
