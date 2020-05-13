import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";
import PersistentDrawerLeft from "./SideNav";

class detectcardio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      gender: "",
      height: "",
      weight: "",
      ap_hi: "",
      ap_lo: "",
      cholestrol: "",
      gluc: "",
      smoke: "",
      alco: "",
      active: ""
    };
  }

  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/car";
    return axios.post(dataurl, data);
  }
  Detectcardio = e => {
    e.preventDefault();
    debugger;
    alert("ok");
    let obj = {
      age: this.state.age,
      gender: this.state.gender,
      height: this.state.height,
      weight: this.state.weight,
      ap_hi: this.state.ap_hi,
      ap_lo: this.state.ap_lo,
      cholestrol: this.state.cholestrol,
      gluc: this.state.gluc,
      smoke: this.state.smoke,
      alco: this.state.alco,
      active: this.state.active
    };
    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        alert("Yes");
        this.props.history.push("/mapcardio");
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
          <h1 className="heading">Detect Cardiovascular disease</h1>
          <div className="Signup">
            <Form>
              <Form.Group controlId="age">
                <Form.Label>Age:</Form.Label>
                <Form.Control
                  // onChange={this.handleChange}
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">Age in days</Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="gender">
                <Form.Label>gender:</Form.Label>
                <Form.Control
                  name="gender"
                  onChange={this.handleChange}
                  value={this.state.gender}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">1 - women, 2 - men</Form.Text>
              </Form.Group>

              <Form.Group controlId="height">
                <Form.Label>height:</Form.Label>
                <Form.Control
                  name="height"
                  onChange={this.handleChange}
                  value={this.state.height}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">height in cm</Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="weight">
                <Form.Label>weight:</Form.Label>
                <Form.Control
                  name="weight"
                  onChange={this.handleChange}
                  value={this.state.weight}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">weight in kg</Form.Text>
              </Form.Group>
              <Form.Group className="" controlId="ap_hi">
                <Form.Label>ap_hi:</Form.Label>
                <Form.Control
                  name="ap_hi"
                  onChange={this.handleChange}
                  value={this.state.ap_hi}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Systolic blood pressure
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="ap_lo">
                <Form.Label>ap_lo:</Form.Label>
                <Form.Control
                  name="ap_lo"
                  onChange={this.handleChange}
                  value={this.state.ap_lo}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Diastolic blood pressure
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="cholestrol">
                <Form.Label>cholestrol:</Form.Label>
                <Form.Control
                  name="cholestrol"
                  onChange={this.handleChange}
                  value={this.state.cholestrol}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  1: normal, 2: above normal, 3: well above normal
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="gluc">
                <Form.Label>gluc:</Form.Label>
                <Form.Control
                  name="gluc"
                  onChange={this.handleChange}
                  value={this.state.gluc}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  1: normal, 2: above normal, 3: well above normal
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="smoke">
                <Form.Label>Smoke:</Form.Label>
                <Form.Control
                  name="smoke"
                  onChange={this.handleChange}
                  value={this.state.smoke}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  1 if you do smoke 0 if not
                </Form.Text>
              </Form.Group>
              <Form.Group className="" controlId="alco">
                <Form.Label>Alco:</Form.Label>
                <Form.Control
                  name="alco"
                  onChange={this.handleChange}
                  value={this.state.alco}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  1 if you do drink 0 if not
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="active">
                <Form.Label>Active:</Form.Label>
                <Form.Control
                  name="active"
                  onChange={this.handleChange}
                  value={this.state.active}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">Physical activity</Form.Text>
              </Form.Group>
              <FormGroup>
                <Button
                  onClick={this.Detectcardio.bind(this)}
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
export default detectcardio;
