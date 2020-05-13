import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup, Modal, ButtonToolbar } from "react-bootstrap";
import PersistentDrawerLeft from "./SideNav";
class DetectLiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: "",
      Total_Bilirubin: "",
      Direct_Bilirubin: "",
      Alkaline_Phosphotase: "",
      Alamine_Aminotransferase: "",
      Aspartate_Aminotransferase: "",
      Total_Proteins: "",
      Albumin: "",
      Albumin_and_Globulin_Ratio: "",
      Gender_Female: "",
      Gender_Male: ""
    };
  }
  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/live";
    return axios.post(dataurl, data);
  }
  Detectliver = e => {
    e.preventDefault();
    debugger;
    alert("ok");
    let obj = {
      Age: this.state.Age,
      Total_Bilirubin: this.state.Total_Bilirubin,
      Direct_Bilirubin: this.state.Direct_Bilirubin,
      Alkaline_Phosphotase: this.state.Alkaline_Phosphotase,
      Alamine_Aminotransferase: this.state.Alamine_Aminotransferase,
      Aspartate_Aminotransferase: this.state.Aspartate_Aminotransferase,
      Total_Proteins: this.state.Total_Proteins,
      Albumin: this.state.Albumin,
      Albumin_and_Globulin_Ratio: this.state.Albumin_and_Globulin_Ratio,
      Gender_Female: this.state.Gender_Female,
      Gender_Male: this.state.Gender_Male
    };
    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        this.props.history.push("/mapliver");
      }
    });
  };

  showdata() {
    window.alert("Show");
  }
  componentDidMount() {
    debugger;
    axios
      .get("http://127.0.0.1:5000/getdata")
      .then(response => {
        console.log(response);
        debugger;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Fit">
        <PersistentDrawerLeft />
        <br></br>
        <h1 className="heading">Detect Liver Disease</h1>
        <div className="Signup">
          <Form>
            <Form.Group controlId="Age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                name="Age"
                value={this.state.Age}
                onChange={this.handleChange}
                type="number"
                placeholder="Enter Age"
              />
              <Form.Text className="text-muted">Age of the patients</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Total_Bilirubin">
              <Form.Label>Total_Bilirubin:</Form.Label>
              <Form.Control
                name="Total_Bilirubin"
                onChange={this.handleChange}
                value={this.state.Total_Bilirubin}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Total Billirubin in mg/dL
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="Direct_Bilirubin">
              <Form.Label> Direct_Bilirubin:</Form.Label>
              <Form.Control
                name="Direct_Bilirubin"
                onChange={this.handleChange}
                value={this.state.Direct_Bilirubin}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">
                Conjugated Billirubin in mg/dL
              </Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Alkaline_Phosphotase">
              <Form.Label>Alkaline_Phosphotase:</Form.Label>
              <Form.Control
                name="Alkaline_Phosphotase"
                onChange={this.handleChange}
                value={this.state.Alkaline_Phosphotase}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">ALP in IU/L</Form.Text>
            </Form.Group>
            <Form.Group className="" controlId="Alamine_Aminotransferase">
              <Form.Label>Alamine_Aminotransferase:</Form.Label>
              <Form.Control
                name="Alamine_Aminotransferase"
                onChange={this.handleChange}
                value={this.state.Alamine_Aminotransferase}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">ALT in IU/L</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Aspartate_Aminotransferase">
              <Form.Label>Aspartate_Aminotransferase:</Form.Label>
              <Form.Control
                name="Aspartate_Aminotransferase"
                onChange={this.handleChange}
                value={this.state.Aspartate_Aminotransferase}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">AST in IU/L</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Total_Proteins">
              <Form.Label>Total_Proteins:</Form.Label>
              <Form.Control
                name="Total_Proteins"
                onChange={this.handleChange}
                value={this.state.Total_Proteins}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Total Proteins g/dL</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Albumin">
              <Form.Label>Albumin:</Form.Label>
              <Form.Control
                name="Albumin"
                onChange={this.handleChange}
                value={this.state.Albumin}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Albumin in g/dL</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Albumin_and_Globulin_Ratio">
              <Form.Label>Albumin_and_Globulin_Ratio:</Form.Label>
              <Form.Control
                name="Albumin_and_Globulin_Ratio"
                onChange={this.handleChange}
                value={this.state.Albumin_and_Globulin_Ratio}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">A/G ratio</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Gender_Female">
              <Form.Label>Gender_Female:</Form.Label>
              <Form.Control
                name="Gender_Female"
                onChange={this.handleChange}
                value={this.state.Gender_Female}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Enter 1 if Female</Form.Text>
            </Form.Group>

            <Form.Group className="" controlId="Gender_Male">
              <Form.Label>Gender_Male:</Form.Label>
              <Form.Control
                name="Gender_Male"
                onChange={this.handleChange}
                value={this.state.Gender_Male}
                type="number"
                placeholder=""
              />
              <Form.Text className="text-muted">Enter 1 if Male</Form.Text>
            </Form.Group>
            <FormGroup>
              <Button
                onClick={this.Detectliver.bind(this)}
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
export default DetectLiver;
