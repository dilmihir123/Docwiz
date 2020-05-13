import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Form, FormGroup } from "react-bootstrap";

class Pneumonia extends Component {
  constructor(props) {
    super(props);

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const fd = new FormData();
    fd.append("file", this.uploadInput.files[0]);
    axios.post("http://127.0.0.1:5000/cx", fd).then(res => {});
  }
  render() {
    return (
      <div>
        <div className="heading1">
          <h1>Upload an image to detect Pneumonia</h1>
        </div>
        <div className="Signup">
          <input
            type="file"
            ref={ref => {
              this.uploadInput = ref;
            }}
          />
          <button onClick={this.handleUploadImage}>Upload</button>
        </div>
      </div>
    );
  }
}

export default Pneumonia;
