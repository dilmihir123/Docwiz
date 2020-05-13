import React, { Component, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Button, Form, FormGroup } from "react-bootstrap";
import Dash from "./UserDash";
import PersistentDrawerLeft from "./SideNav";
let x;
class detecth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      sex: "",
      cp: "",
      trestbs: "",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      exang: "",
      oldpeak: "",
      slope: "",
      ca: "",
      thal: ""
    };
  }

  diabetes() {
    let path = "/Diabetes";
    this.props.history.push(path);
  }

  callml() {
    debugger;
    alert("show");
    let obj = {
      exp: this.state.age
    };
    console.log("datas", obj);
    axios.post("http://localhost:5000/api", obj).then(res => {
      if (res) {
        if (Number(res) == 0) {
          alert("ok");
        } else {
          alert("hmm");
        }
      } else {
        alert("Data not Saved");
        debugger;
      }
    });
  }

  getresult(data) {
    const dataurl = "http://127.0.0.1:5000/hear";
    return axios.post(dataurl, data);
  }

  Addstudent = e => {
    e.preventDefault();
    alert("ok");
    let obj = {
      age: this.state.age,
      sex: this.state.sex,
      cp: this.state.cp,
      trestbs: this.state.trestbs,
      chol: this.state.chol,
      fbs: this.state.fbs,
      restecg: this.state.restecg,
      thalach: this.state.thalach,
      exang: this.state.exang,
      oldpeak: this.state.oldpeak,
      slope: this.state.slope,
      ca: this.state.ca,
      thal: this.state.thal
    };

    this.getresult(obj).then(res => {
      this.setState({ message: "Yes" });
      // this.props.history.push("/UserDash");
      if (Number(res.data.results[0]) == 0) {
        alert("No");
        this.props.history.push("/nodisease");
      } else {
        alert("Yes");
        this.props.history.push("/mapheart");
      }
    });
  };

  // Addstudent() {
  //   // debugger;

  //   alert("ok");
  //   let obj = {
  //     age: this.state.age,
  //     sex: this.state.sex,
  //     cp: this.state.cp,
  //     trestbs: this.state.trestbs,
  //     chol: this.state.chol,
  //     fbs: this.state.fbs,
  //     restecg: this.state.restecg,
  //     thalach: this.state.thalach,
  //     exang: this.state.exang,
  //     oldpeak: this.state.oldpeak,
  //     slope: this.state.slope,
  //     ca: this.state.ca,
  //     thal: this.state.thal
  //   };
  //   console.log("datas", obj);
  //   axios.post("http://127.0.0.1:5000/api", obj).then(json => {
  //     if (json) {
  //       console.log(json);
  //       localStorage.setItem("returndata", JSON.stringify(json));
  //       //this.state.age = json.data.results[0];
  //       console.log(json.data.results[0]);
  //       //   if (json.data.results[0] === 0) {
  //       //     alert("6");
  //       //     this.diabetes();

  //       //     // alert("No he doesnt have the disease");
  //       //   } else {
  //       //     //alert("Yes he has the disease")
  //       //     alert("6");
  //       //     this.diabetes();
  //       //   }
  //       //   // alert(json.data.results[0]);
  //       //   // alert("Data Save Successfully");
  //       // } else {
  //       //   alert("Data not Saved");
  //       //   // debugger;
  //       // }
  //     }
  //   });
  //   if (JSON.parse(localStorage.getItem("returndata")).data.results[0] === 0) {
  //     let path = "/Diabetes";
  //     this.props.history.push(path);
  //   } else {
  //     let path = "/Diabetes";
  //     this.props.history.push(path);
  //   }
  // }

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
      <div>
        <PersistentDrawerLeft />
        <div className="Fit">
          <br></br>
          <h1 className="heading">Detect Heart Disorder</h1>
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
                  placeholder="Enter Age"
                />
                <Form.Text className="text-muted">
                  Enter age as number..
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="sex">
                <Form.Label>Sex:</Form.Label>
                <Form.Control
                  name="sex"
                  onChange={this.handleChange}
                  value={this.state.sex}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Enter 1 for male , Enter 0 for female..
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="cp">
                <Form.Label>Chest pain:</Form.Label>
                <Form.Control
                  name="cp"
                  onChange={this.handleChange}
                  value={this.state.cp}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Chest pain type between 0 to 3..
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="trestbs">
                <Form.Label>Trestbs:</Form.Label>
                <Form.Control
                  name="trestbs"
                  onChange={this.handleChange}
                  value={this.state.trestbs}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  resting blood pressure (in mm Hg on admission to the hospital)
                </Form.Text>
              </Form.Group>
              <Form.Group className="" controlId="chol">
                <Form.Label>Cholestoral:</Form.Label>
                <Form.Control
                  name="chol"
                  onChange={this.handleChange}
                  value={this.state.chol}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  serum cholestoral in mg/dl
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="fbs">
                <Form.Label>Fasting blood sugar:</Form.Label>
                <Form.Control
                  name="fbs"
                  onChange={this.handleChange}
                  value={this.state.fbs}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  (fasting blood sugar > 120 mg/dl) (1 = true; 0 = false)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="restecg">
                <Form.Label>Resting electrocardiographic results:</Form.Label>
                <Form.Control
                  name="restecg"
                  onChange={this.handleChange}
                  value={this.state.restecg}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  resting electrocardiographic results (0,1 or 2)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="thalach">
                <Form.Label>Thalach(Maximum heart rate achieved):</Form.Label>
                <Form.Control
                  name="thalach"
                  onChange={this.handleChange}
                  value={this.state.thalach}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  maximum heart rate achieved..
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="exang">
                <Form.Label>Exercise Induced Angina:</Form.Label>
                <Form.Control
                  name="exang"
                  onChange={this.handleChange}
                  value={this.state.exang}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  Exercise induced angina (1=yes ,0=no)
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="oldpeak">
                <Form.Label>Oldpeak:</Form.Label>
                <Form.Control
                  name="oldpeak"
                  onChange={this.handleChange}
                  value={this.state.oldpeak}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  ST depression induced by exercise relative to rest
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="slope">
                <Form.Label>Slope of the peak:</Form.Label>
                <Form.Control
                  name="slope"
                  onChange={this.handleChange}
                  value={this.state.slope}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  the slope of the peak exercise ST segment
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="ca">
                <Form.Label>CA:</Form.Label>
                <Form.Control
                  name="ca"
                  onChange={this.handleChange}
                  value={this.state.ca}
                  type="number"
                  placeholder="Enter 0,1,2,3 or 4"
                />
                <Form.Text className="text-muted">
                  number of major vessels (0-3) colored by flourosopy
                </Form.Text>
              </Form.Group>

              <Form.Group className="" controlId="thal">
                <Form.Label>Thal:</Form.Label>
                <Form.Control
                  name="thal"
                  onChange={this.handleChange}
                  value={this.state.thal}
                  type="number"
                  placeholder=""
                />
                <Form.Text className="text-muted">
                  1 = normal; 2= fixed defect; 3 = reversable defect
                </Form.Text>
              </Form.Group>

              <FormGroup>
                <Button
                  onClick={this.Addstudent.bind(this)}
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
export default detecth;
